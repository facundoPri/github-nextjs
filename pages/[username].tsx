import { Alert, Flex, Link, Image, Box, Text } from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import useSWR from 'swr'
import Profile from '../components/Profile'
import { useRouter } from 'next/router'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw Error('Something went wrong')
  }

  const data = await res.json()
  return data
}

const pages: NextPage = () => {
  const router = useRouter()
  const { data, error } = useSWR(`https://api.github.com/users/${router.query.username}`, fetcher)
  if (error) {
    return <Alert status="error">Loading failed: {error.message}</Alert>
  }

  if (!data) {
    return <Alert status="info">Loading...</Alert>
  }

  return (
    <Flex flexDirection={['column', 'column', 'row', 'row']} alignItems="center" m={4}>
      <Profile data={data} />
      <NextLink href="/" passHref>
        <Link>Go home</Link>
      </NextLink>
    </Flex>
  )
}

export default pages
