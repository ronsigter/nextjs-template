import { Box, Flex, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box minH='100vh'>
        <Flex justifyContent='center' alignItems='center'>
          <Text>Hello</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default Home
