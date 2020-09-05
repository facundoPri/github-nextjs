import { PrismaClient } from '@prisma/client'

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

export default async (req, res) => {
  if (req.method === 'GET') {
    const users = await indexUsers()
    res.json(users)
  } else if (req.method === 'POST') {
    const info = req.body

    const user = await postUser({ data: { ...info } })
    console.log(info)
    console.log(user)
    res.json(user)
  }
}
