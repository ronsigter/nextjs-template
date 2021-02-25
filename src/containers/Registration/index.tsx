import { Box } from '@chakra-ui/react'
import { RegistrationForm } from 'components/Forms'
import { Inputs } from 'components/Forms/Registration/types'

const Registration: React.FC = () => {
  const onSubmit = (info: Inputs): void => console.log(info)

  return (
    <Box pt={16} px={4}>
      <RegistrationForm onSubmit={onSubmit} />
    </Box>
  )
}

export default Registration
