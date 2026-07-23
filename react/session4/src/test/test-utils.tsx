import { render } from '@testing-library/react'
import type { ReactElement } from 'react'

import { ThemeProvider } from '../contexts/theme-context'
import { InternProvider } from '../contexts/intern-context'

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <InternProvider>
        {children}
      </InternProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    wrapper: AllProviders,
    ...options,
  })

export * from '@testing-library/react'

export { customRender as render }