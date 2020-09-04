import { Flex, Heading, Link } from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'

const IndexPage: NextPage = () => {
  return (
    <Flex flexDir="column" alignItems="center" m={4}>
      <Heading as="h1" size="2xl">
        Hello World
      </Heading>
      <NextLink href="/users" passHref>
        <Link>Go home</Link>
      </NextLink>
    </Flex>
  )
}

export default IndexPage
