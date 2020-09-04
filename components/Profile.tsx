import { Flex, Image, Box, Text } from '@chakra-ui/core'
import React from 'react'

const Profile = ({ data }) => {
  return (
    <Flex flexDirection="column" maxWidth={40} alignItems="center">
      <Image rounded="full" size="100px" src={data.avatar_url} alt={data.name} />
      <Flex flexDirection="column" m={2}>
        <Text fontSize="xl">{data.name}</Text>
        <Text>{data.login}</Text>
      </Flex>
      <Flex flexDirection="column" m={2}>
        <Text>{data.followers} followers &bull;</Text>
        <Text>{data.following} following</Text>
      </Flex>
      <Flex flexDirection="column" m={2}>
        {data.company && <Text>{data.company}</Text>}
        {data.location && <Text>{data.location}</Text>}
        {data.email && <Text>{data.email}</Text>}
        {data.blog && <Text>{data.blog}</Text>}
      </Flex>
    </Flex>
  )
}

export default Profile
