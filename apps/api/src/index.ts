import "dotenv/config"

import { PrismaClient } from "@prisma/client"
import express, { Request, Response } from "express"
import cookies from "cookie-parser"
import cors from "cors"
import getTrash from "./getTrash"

const app = express()
const prisma = new PrismaClient()

app.use(cookies())
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
)

app.get("/", getTrash)

app.post("/")

app.post("/report")

app.listen(5000, () => {
  console.info(`Server running on port ${5000}.`)
})
