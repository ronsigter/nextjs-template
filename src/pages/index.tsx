import { Box } from '@chakra-ui/react'
import { LoginLayout } from 'containers/Layouts'
import Login from 'containers/Login'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LoginLayout>
        <Login />
      </LoginLayout>
    </Box>
  )
}

export default Home
