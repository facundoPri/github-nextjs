import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

async function indexUsers() {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  return users
}

async function postUser(userInfo) {
  const prisma = new PrismaClient()
  const user = await prisma.user.create(userInfo)
  return user
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const users = await indexUsers()
    return res.json(users)
  } else if (req.method === 'POST') {
    const info = req.body
    const user = await postUser({ data: { ...info } })
    return res.json(user)
  }
}
