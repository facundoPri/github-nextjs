import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ['query'] })

  try {
    const { username } = req.body
    const data = { data: { username } }
    const user = await prisma.user.create(data)
    res.status(201).json(user)
  } catch (e) {
    res.status(500).json({ error: 'Sorry unable to save user' })
  } finally {
    await prisma.$disconnect()
  }
}
