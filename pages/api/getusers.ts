import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] })

  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch users' })
  } finally {
    await prisma.$disconnect()
  }
}
