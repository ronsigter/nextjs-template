import { render, screen } from 'utils/test.utils'

describe('initial test', () => {
  beforeEach(() => render(<div data-testid='hello-world'>Hello World</div>))

  it('Renders the component', () => {
    expect(screen.getByTestId('hello-world')).toHaveTextContent('Hello World')
  })
})
