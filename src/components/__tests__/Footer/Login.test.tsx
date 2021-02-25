import { render } from 'utils/test-utils'
import { LoginFooter } from 'components/Footer'

describe('LoginFooter', () => {
  test('should render logo and year today', () => {
    const { getByText, getByAltText } = render(<LoginFooter />, {})
    const year = getByText(`Podmetrics ©${new Date().getFullYear()} Created by Podcast Network`)
    const image = getByAltText('podmetrics-logo')

    expect(year).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
