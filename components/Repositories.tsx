import { NextPage } from 'next'
import React from 'react'
import { List, ListItem, Text, Box } from '@chakra-ui/core'
import { report } from 'process'

const Repositories: NextPage = ({ data }) => {
  return (
    <List>
      <ListItem>
        <Box>
          <Text>"{repo.name}"</Text>
          <Text>"{repo.html_url}"</Text>
          <Text>"{repo.language}"</Text>
        </Box>
      </ListItem>
    </List>
  )
}

export default Repositories
