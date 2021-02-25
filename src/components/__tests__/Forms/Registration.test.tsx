import { act, render, screen, waitFor } from 'utils/test-utils'
import { RegistrationForm } from 'components/Forms'
import userEvent from '@testing-library/user-event'

describe('Registration Form', () => {
  const handleSubmitMock = jest.fn()

  beforeEach(() => render(<RegistrationForm onSubmit={handleSubmitMock} />, {}))

  it('loads registration sections', async () => {
    const signupSection = await screen.findByTestId('signup-section')
    const podcastSection = await screen.findByTestId('podcast-section')

    expect(signupSection).toHaveTextContent('Sign Up')
    expect(podcastSection).toHaveTextContent('Your Podcast')
  })

  it('disables submit button if consent is not checked', async () => {
    const submitButton = await screen.findByTestId('submit-button')
    const consentCheckbox = await screen.findByTestId('consent-checkbox')

    expect(submitButton).toBeEnabled() // initially be enabled
    userEvent.click(consentCheckbox)
    expect(submitButton).toBeDisabled() // be disabled after
  })

  it('shows form error messages', async () => {
    const errorMessages = [
      'Email is required',
      'Password is required',
      'Podcast name is required',
      'Podcast author is required',
      'Description is required',
      'Mobile number is required',
      'Country is required',
      'Category is required',
    ]

    const submitButton = await screen.findByTestId('submit-button')
    userEvent.click(submitButton)

    const formErrorMessages = await screen.findAllByTestId('error-message')
    formErrorMessages.map((formErrorMessage, index) => {
      expect(formErrorMessage).toBeVisible()
      expect(formErrorMessage).toHaveTextContent(errorMessages[index])
    })
  })

  it('calls the onSubmit method with the expected value', async () => {
    const testValues = {
      email: 'podcaster@podmetrics.co',
      password: 'podmetricstest',
      retypePassword: 'podmetricstest',
      podcastName: 'Podmetrics Podcast',
      author: 'Podcast Network Asia',
      description: 'PNA test podcast',
      countryCode: '+63',
      mobileNumber: '9111111111',
      country: 'Philippines',
      category: 'Technology',
    }

    const emailInput = await screen.findByTestId('email-input')
    const passwordInput = await screen.findByTestId('password-input')
    const retypePasswordInput = await screen.findByTestId(
      'retypePassword-input'
    )
    const podcastNameInput = await screen.findByTestId('podcastName-input')
    const authorInput = await screen.findByTestId('author-input')
    const descriptionInput = await screen.findByTestId('description-input')
    const countryCodeInput = await screen.findByTestId('countryCode-input')
    const mobileNumberInput = await screen.findByTestId('mobileNumber-input')
    const countryInput = await screen.findByTestId('country-input')
    const categoryInput = await screen.findByTestId('category-input')
    const submitButton = await screen.findByTestId('submit-button')

    await act(async () => {
      await userEvent.type(emailInput, testValues.email)
      await userEvent.type(passwordInput, testValues.password)
      await userEvent.type(retypePasswordInput, testValues.retypePassword)
      await userEvent.type(podcastNameInput, testValues.podcastName)
      await userEvent.type(authorInput, testValues.author)
      await userEvent.type(descriptionInput, testValues.description)
      await userEvent.selectOptions(countryCodeInput, testValues.countryCode)
      await userEvent.type(mobileNumberInput, testValues.mobileNumber)
      await userEvent.selectOptions(countryInput, testValues.country)
      await userEvent.selectOptions(categoryInput, testValues.category)
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
