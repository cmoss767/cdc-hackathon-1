import "dotenv/config"

import express from "express"
import cookies from "cookie-parser"
import cors from "cors"
import getTrash from "./getTrash"
import addTrash from "./addTrash"
import findTrash from "./findTrash"

const app = express()

app.use(cookies())
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
)
app.use(express.json())

app.get("/", getTrash)

app.put("/predict-location", findTrash)

app.post("/report", addTrash)

app.listen(5000, () => {
  console.info(`Server running on port ${5000}.`)
})
