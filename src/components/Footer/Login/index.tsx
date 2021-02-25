import { Box, Flex, Image } from '@chakra-ui/react'

const LoginFooter: React.FC = () => {
  return (
    <Flex my={10} direction="column" alignItems="center" justifyContent="center">
      <Image src="/images/podmetrics.png" boxSize="100px" objectFit="cover" alt="podmetrics-logo" />
      <Box textAlign="center">
        Podmetrics ©{new Date().getFullYear()} Created by Podcast Network
      </Box>
    </Flex>
  )
}

export default LoginFooter
