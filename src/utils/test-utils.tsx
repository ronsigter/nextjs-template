import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import '@testing-library/jest-dom'
import 'mutationobserver-shim'

const ChakraRenderer = ({ children }): JSX.Element => {
  return <ChakraProvider>{children}</ChakraProvider>
}

const customRenderer = (ui, options) =>
  render(ui, {
    wrapper: ChakraRenderer,
    ...options,
  })

export * from '@testing-library/react'
export { customRenderer as render }
