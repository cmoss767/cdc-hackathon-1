import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { ReportSeverity } from "@prisma/client"

interface TrashBody {
  amount?: number
  name?: string
  location?: object
  report?: boolean
  severity?: ReportSeverity
}

const addTrash = async (req: Request, res: Response) => {
  try {
    const body = res.locals.data.body as TrashBody
    const prisma = new PrismaClient()

    const newTrash = await prisma.trash.create({
      data: {
        ...body,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export default addTrash
