import { act, render, screen, waitFor } from 'utils/test-utils'
import { LoginForm } from 'components/Forms'
import userEvent from '@testing-library/user-event'

describe('Login Form', () => {
  const handleSubmitMock = jest.fn()

  beforeEach(() => render(<LoginForm onSubmit={handleSubmitMock} />, {}))

  it('loads login form', async () => {
    const loginForm = await screen.findByTestId('login-form')

    expect(loginForm).toHaveTextContent('sign in')
    expect(loginForm).toHaveTextContent(
      'Welcome back! Enter your details to access your dashboard'
    )
  })

  it('shows form error messages', async () => {
    const errorMessages = ['Email is required', 'Password is required']

    const submitButton = await screen.findByTestId('submit-button')
    userEvent.click(submitButton)

    const formErrorMessages = await screen.findAllByTestId('error-message')
    formErrorMessages.map((formErrorMessage, index) => {
      expect(formErrorMessage).toBeVisible()
      expect(formErrorMessage).toHaveTextContent(errorMessages[index])
    })

    await waitFor(() => {
      expect(handleSubmitMock).toBeCalledTimes(0)
    })
  })

  it('shows and hide password', async () => {
    const passwordInput = await screen.findByTestId('password-input')
    const toggleButton = await screen.findByTestId('toggle-button')

    expect(passwordInput).toHaveAttribute('type', 'password')
    userEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')
  })

  it('calls the onSubmit method with the expected value', async () => {
    const testValues = {
      email: 'podcaster@podmetrics.co',
      password: 'podmetricstest',
    }

    const emailInput = await screen.findByTestId('email-input')
    const passwordInput = await screen.findByTestId('password-input')
    const submitButton = await screen.findByTestId('submit-button')

    await act(async () => {
      await userEvent.type(emailInput, testValues.email)
      await userEvent.type(passwordInput, testValues.password)
      await userEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(handleSubmitMock).toHaveBeenCalledWith(
        testValues,
        expect.anything()
      )
    })
  })
})
