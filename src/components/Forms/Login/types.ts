export type Inputs = {
  email: string
  password: string
}

export type LoginFormProps = {
  onSubmit: (formInput: Inputs) => void
}
