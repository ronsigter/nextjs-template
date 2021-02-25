import { Box, Flex } from '@chakra-ui/react'
import { LoginLayout } from './types'
import { LoginFooter } from 'components/Footer'

const loginLayout: React.FC<LoginLayout> = ({ children }) => {
  return (
    <Flex minH="100vh" direction="column" alignItems="center" justifyContent="center">
      <Flex as="main" flex="1" alignItems="center" justifyContent="center">
        {children}
      </Flex>
      <Box as="footer">
        <LoginFooter />
      </Box>
    </Flex>
  )
}

export default loginLayout
