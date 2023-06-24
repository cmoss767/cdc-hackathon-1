import { PrismaClient } from "@prisma/client"

const createTrash = async (prisma: PrismaClient) => {
  return await prisma.trash.createMany({
    data: [
      {
        report: true,
        severity: "HIGH",
        name: "chris",
      },
    ],
  })
}

export default createTrash
