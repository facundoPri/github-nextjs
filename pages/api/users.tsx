import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const users = await prisma.user.findMany()
      return res.json(users)
    case 'POST':
      const info = req.body
      const user = await prisma.user.create({ data: { ...info } })
      return res.json(user)
  }
}
