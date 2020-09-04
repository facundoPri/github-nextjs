import {
  Flex,
  Heading,
  Link,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast,
  FormErrorMessage
} from '@chakra-ui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const IndexPage: NextPage = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const toast = useToast()

  const onSubmit = (data) => {
    console.log(data)
  }

  if (!!errors) {
    console.log(errors.username)
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

      <NextLink href="/users" passHref>
        <Link>Go home</Link>
      </NextLink>
    </Flex>
  )
}

export default IndexPage
