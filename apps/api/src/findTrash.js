import { kmeans } from "ml-kmeans"
import { PrismaClient } from "@prisma/client"
import { makeChatRequest, reverseGeocode } from "./helperFunctions"

const findTrash = async (req, res) => {
  try {
    const prisma = new PrismaClient()
    const trash = await prisma.trash.findMany()
    const coordinates = []
    //reshaping coords [[lat, long]]
    trash.forEach((trashItem) => {
      coordinates.push([
        trashItem.location.latitude,
        trashItem.location.longitude,
      ])
    })

    const numClusters = 5
    //getting 5 centers of the clusters
    const { centroids } = kmeans(coordinates, numClusters, {
      maxIterations: 100,
      tolerance: 1e-6,
    })
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 3958.8 // Radius of the Earth in miles
      const latDiff = (lat2 - lat1) * (Math.PI / 180)
      const lonDiff = (lon2 - lon1) * (Math.PI / 180)
      const a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(lonDiff / 2) *
          Math.sin(lonDiff / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      return R * c
    }
    // Calculate the distances and find the centroid with the highest concentration
    let highestConcentrationClusterSize = 0
    let highestConcentrationClusterIndex = 0
    for (let i = 0; i < centroids.length; i++) {
      const centroid = centroids[i]
      let clusterSize = 0

      for (const point of coordinates) {
        const distanceInMiles = calculateDistance(
          point[0],
          point[1],
          centroid[0],
          centroid[1]
        )
        if (distanceInMiles <= 5) {
          clusterSize++
        }
      }

      if (clusterSize > highestConcentrationClusterSize) {
        highestConcentrationClusterSize = clusterSize
        highestConcentrationClusterIndex = i
      }
    }
    const highestConcentrationCentroid =
      centroids[highestConcentrationClusterIndex]
    let foundAddress
    await reverseGeocode(
      highestConcentrationCentroid[0],
      highestConcentrationCentroid[1]
    )
      .then((address) => {
        if (address) {
          foundAddress = Object.values(address).join(", ")
        } else {
          res
            .status(500)
            .json({ error: "An error reverse geocaching occurred" })
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error)
      })

    const prompt = `I want you to act as an expert on the biodiversity of an area and the importance of picking up trash in ${foundAddress}. My first request is "I need help identifying biodiversity in my area. Keep your response shorter than 500 characters."`

    const comment = await makeChatRequest(prompt, res)
    const parsedComment = comment.data.choices[0].text.trim()

    res.json({
      data: {
        location: highestConcentrationCentroid,
        text: parsedComment,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred" })
  }
}

export default findTrash
