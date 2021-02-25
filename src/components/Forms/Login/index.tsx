import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LoginFormProps, Inputs } from './types'

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>()
  const { onToggle, isOpen } = useDisclosure()

  const formLabel = (label: string): React.ReactElement => (
    <FormLabel textTransform="uppercase" p="0" m="0">
      {label}
    </FormLabel>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
      <Box mb={4}>
        <Heading as="h3" textTransform="capitalize">
          sign in
        </Heading>
        <Text>Welcome back! Enter your details to access your dashboard</Text>
      </Box>
      <Stack spacing={4}>
        {/* EMAIL */}
        <FormControl isInvalid={!!errors.email}>
          {formLabel('email')}
          <Input
            name="email"
            placeholder="Enter your email"
            ref={register({ required: true })}
            data-testid="email-input"
          />
          <FormErrorMessage data-testid="error-message">
            Email is required
          </FormErrorMessage>
        </FormControl>
        {/* PASSWORD */}
        <FormControl isInvalid={!!errors.password}>
          {formLabel('password')}
          <InputGroup>
            <Input
              type={isOpen ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              ref={register({ required: true })}
              data-testid="password-input"
            />
            <InputRightElement width="4.5rem">
              <Button onClick={onToggle} data-testid="toggle-button">
                {isOpen ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage data-testid="error-message">
            Password is required
          </FormErrorMessage>
        </FormControl>
        <Box>
          <Button type="submit" data-testid="submit-button">
            Sign in
          </Button>
        </Box>
      </Stack>
    </form>
  )
}

export default LoginForm
