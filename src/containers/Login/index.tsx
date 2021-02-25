import { Box } from '@chakra-ui/react'
import { Inputs } from 'components/Forms/Login/types'
import { LoginForm } from 'components/Forms'

const Login: React.FC = () => {
  const onSubmit = (info: Inputs): void => console.log(info)

  return (
    <Box>
      <LoginForm onSubmit={onSubmit} />
    </Box>
  )
}

export default Login
