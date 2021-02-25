export type Inputs = {
  email: string
  password: string
  retypePassword: string
  podcastName: string
  author: string
  description: string
  mobileNumber: string
  country: string
  category: string
  countryCode: string
}

export type RegistrationFormProps = {
  onSubmit: (formInput: Inputs) => void
}
