import tf from "@tensorflow/tfjs"
import { Request, Response } from "express"

import { Rank, Tensor } from "@tensorflow/tfjs-node"

const findTrash = async (req: Request, res: Response) => {
  try {
    // Extract the previous locations from the request body

    // Prepare and preprocess the data
    const previousLocations = [
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3   [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
      [40.7128, -74.006], // Previous location 1
      [34.0522, -118.2437], // Previous location 2
      [51.5074, -70.1278], // Previous location 3
    ] // Replace with your own dataset
    const model = createModel(previousLocations.length, 2)

    // Convert previousLocations to a TensorFlow tensor
    const inputTensor = tf.tensor2d(previousLocations)

    // Normalize the input data if necessary

    // Reshape the input tensor to match the model's input shape
    const reshapedInputTensor = inputTensor.reshape([
      1,
      inputTensor.shape[0],
      inputTensor.shape[1],
    ])

    // Make a prediction using the loaded model
    const predictedLocation = model.predict(reshapedInputTensor) as Tensor<Rank>

    const predictedLocationArray = predictedLocation.arraySync() as number[][]
    const minLatitude = -90
    const maxLatitude = 90
    const minLongitude = -180
    const maxLongitude = 180

    const latitudeScalingFactor = maxLatitude - minLatitude
    const longitudeScalingFactor = maxLongitude - minLongitude

    const scaledLatitude =
      predictedLocationArray[0][0] * latitudeScalingFactor + minLatitude
    const scaledLongitude =
      predictedLocationArray[0][1] * longitudeScalingFactor + minLongitude

    res.json({ scaledLatitude, scaledLongitude })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred" })
  }
}

export default findTrash

function createModel(sequenceLength: number, numFeatures: number) {
  const model = tf.sequential()
  model.add(
    tf.layers.lstm({
      units: 64,
      inputShape: [sequenceLength, numFeatures],
      returnSequences: false,
    })
  )
  model.add(tf.layers.dense({ units: 2, activation: "softmax" }))
  return model
}
