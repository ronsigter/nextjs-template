import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  countryOptions,
  countryCodeOptions,
  categoryOptions,
} from './selectOptions'
import { RegistrationFormProps, Inputs } from './types'

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [isChecked, setIsChecked] = useState(true)
  const { register, handleSubmit, errors, watch } = useForm<Inputs>()
  const password = useRef({})
  password.current = watch('password', '')

  const formLabel = (label: string): React.ReactElement => (
    <FormLabel textTransform="uppercase" p="0" m="0">
      {label}
    </FormLabel>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="registration-form">
      <Stack spacing={8}>
        <Box as="section" data-testid="signup-section">
          <Box mb={8}>
            <Heading as="h3">Sign Up</Heading>
            <Text>Excited to get started? So are we. Let&apos;s go!</Text>
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
              <Input
                type="password"
                placeholder="Create a password"
                name="password"
                ref={register({ required: true })}
                data-testid="password-input"
              />
              <FormErrorMessage data-testid="error-message">
                Password is required
              </FormErrorMessage>
            </FormControl>
            {/* RETYPE PASSWORD */}
            <FormControl isInvalid={!!errors.retypePassword}>
              {formLabel('retype password')}
              <Input
                type="password"
                placeholder="Retype your password"
                name="retypePassword"
                ref={register({
                  validate: (value) =>
                    value === password.current || 'The passwords do not match',
                })}
                data-testid="retypePassword-input"
              />
              <FormErrorMessage data-testid="error-message">
                The passwords do not match
              </FormErrorMessage>
            </FormControl>
          </Stack>
        </Box>
        <Box as="section" data-testid="podcast-section">
          <Box mb={8}>
            <Heading as="h3">Your Podcast</Heading>
            <Text>Tell us about your podcast.</Text>
          </Box>
          <Stack spacing={4}>
            {/* PODCAST NAME */}
            <FormControl isInvalid={!!errors.podcastName}>
              {formLabel('podcast name')}
              <Input
                name="podcastName"
                placeholder="Your podcast title"
                ref={register({ required: true })}
                data-testid="podcastName-input"
              />
              <FormErrorMessage data-testid="error-message">
                Podcast name is required
              </FormErrorMessage>
            </FormControl>
            {/* AUTHOR */}
            <FormControl isInvalid={!!errors.author}>
              {formLabel('podcaster')}
              <Input
                name="author"
                placeholder="The author of the podcast"
                ref={register({ required: true })}
                data-testid="author-input"
              />
              <FormErrorMessage data-testid="error-message">
                Podcast author is required
              </FormErrorMessage>
            </FormControl>
            {/* DESCRIPTION */}
            <FormControl isInvalid={!!errors.description}>
              {formLabel('description')}
              <Input
                name="description"
                placeholder="Describe your podcast"
                ref={register({ required: true })}
                data-testid="description-input"
              />
              <FormErrorMessage data-testid="error-message">
                Description is required
              </FormErrorMessage>
            </FormControl>
            {/* MOBILE NUMBER */}
            <FormControl
              isInvalid={!!errors.mobileNumber || !!errors.countryCode}
            >
              {formLabel('mobile number')}
              <Flex>
                <Select
                  w="30%"
                  name="countryCode"
                  ref={register({ required: true })}
                  mr={4}
                  data-testid="countryCode-input"
                >
                  {countryCodeOptions.map((countryCode: string, index) => (
                    <option value={countryCode} key={index}>
                      {countryCode}
                    </option>
                  ))}
                </Select>
                <NumberInput flex="1">
                  <NumberInputField
                    placeholder="Your mobile number"
                    name="mobileNumber"
                    ref={register({ required: true })}
                    data-testid="mobileNumber-input"
                  />
                </NumberInput>
              </Flex>
              <FormErrorMessage data-testid="error-message">
                Mobile number is required
              </FormErrorMessage>
            </FormControl>
            {/* COUNTRY */}
            <FormControl isInvalid={!!errors.country}>
              {formLabel('country')}
              <Select
                placeholder="Select country"
                name="country"
                ref={register({ required: true })}
                data-testid="country-input"
              >
                {countryOptions.map((country: string, index) => (
                  <option value={country} key={index}>
                    {country}
                  </option>
                ))}
              </Select>
              <FormErrorMessage data-testid="error-message">
                Country is required
              </FormErrorMessage>
            </FormControl>
            {/* CATEGORY */}
            <FormControl isInvalid={!!errors.category}>
              {formLabel('podcast category')}
              <Select
                placeholder="Select category"
                name="category"
                ref={register({ required: true })}
                data-testid="category-input"
              >
                {categoryOptions.map((category: string, index) => (
                  <option value={category} key={index}>
                    {category}
                  </option>
                ))}
              </Select>
              <FormErrorMessage data-testid="error-message">
                Category is required
              </FormErrorMessage>
            </FormControl>
            <Box>
              <Checkbox
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                data-testid="consent-checkbox"
              >
                <Text>
                  I agree to the{' '}
                  <b>Podmetrics Terms of Use and Privacy Policy</b>
                </Text>
              </Checkbox>
              <Box>
                <Button
                  mt={4}
                  type="submit"
                  isDisabled={!isChecked}
                  data-testid="submit-button"
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </form>
  )
}

export default RegistrationForm
