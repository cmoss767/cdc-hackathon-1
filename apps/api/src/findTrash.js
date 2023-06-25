import { kmeans } from "ml-kmeans"
import { coordinates } from "./dummyData"

const findTrash = async (req, res) => {
  try {
    const numClusters = 5 // Adjust the number of clusters as needed

    const { centroids, clusters } = kmeans(coordinates, numClusters, {
      maxIterations: 100,
      tolerance: 1e-6,
    })

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

        if (distanceInMiles <= 50) {
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
    let result = 0

    res.json(highestConcentrationCentroid)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred" })
  }
}
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

export default findTrash
