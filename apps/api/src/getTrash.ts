import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const getTrash = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient()

    const trash = await prisma.trash.findMany()

    return res.status(200).json({ message: "got the trash!", data: trash })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: "error getting trash" })
  }
}

export default getTrash
