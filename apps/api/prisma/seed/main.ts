import { PrismaClient } from "@prisma/client"
import createTrash from "./createTrash"

const prisma = new PrismaClient()

const promiseArr: Promise<void>[] = []

promiseArr.push(createTrash(prisma).then(() => undefined))

Promise.all(promiseArr).then(() => {
  prisma.$disconnect()
})
