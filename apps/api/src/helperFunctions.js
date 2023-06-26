import axios from "axios"
const API_KEY = process.env.API_KEY
import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
  organization: process.env.ORG_KEY,
  apiKey: API_KEY,
})

export async function reverseGeocode(lat, lon) {
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  //
  try {
    const response = await axios.get(apiUrl)
    const { address } = response.data

    // Extract the desired address components
    const city = address.city || address.town || address.village
    const state = address.state
    const country = address.country

    // Return the address components
    return address
  } catch (error) {
    console.error("Reverse geocoding failed:", error)
    return null
  }
}

export async function makeChatRequest(prompt) {
  const openai = new OpenAIApi(configuration)
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    temperature: 1,
    max_tokens: 500,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  })
  return response
}
