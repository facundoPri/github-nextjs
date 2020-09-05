import {
  Flex,
  Heading,
  Link,
  Box,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  Text
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useFetch } from '../hooks/useFetch'
import api from '../services/api'

const IndexPage: NextPage = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const { data, mutate } = useFetch('/users')

  const onSubmit = async (info) => {
    const response = await api.post('/users', info)

    const addUser = [...data, info]
    console.log(addUser)

    mutate(addUser, false)
  }

  return (
    <Flex flexDir="column" alignItems="center" m={4}>
      <Heading as="h1" size="2xl">
        Users
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <FormControl isInvalid={errors.username} mr="2">
            <Input name="username" ref={register({ required: true })} />
            <FormErrorMessage>{errors.username && 'Username is required'}</FormErrorMessage>
          </FormControl>
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
      <Flex flexDir="column">
        {!data ? (
          <Text>Loading...</Text>
        ) : (
          data.map((user) => {
            console.log(user)
            return (
              <Flex key={user.id}>
                <NextLink href={`/${user.username}`} passHref>
                  <Link>{user.username}</Link>
                </NextLink>
              </Flex>
            )
          })
        )}
      </Flex>
    </Flex>
  )
}

export default IndexPage
