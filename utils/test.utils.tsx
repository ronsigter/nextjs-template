import React, { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

// We'll add some providers here if ever we'll be using contexts
const AllTheProviders: FC = ({ children }) => <>{children}</>

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export all of react testing lib here
export * from '@testing-library/react'

export { customRender as render }
