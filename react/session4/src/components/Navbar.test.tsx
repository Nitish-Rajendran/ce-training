import { render, screen } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'
import { test, expect } from 'vitest'

test('renders dashboard title', () => {
  render(<Navbar />)

  expect(
    screen.getByText(/intern dashboard/i)
  ).toBeInTheDocument()
})

test('theme toggle button exists', () => {
  render(<Navbar />)

  expect(
    screen.getByRole('button')
  ).toBeInTheDocument()
})

test('toggle button can be clicked', async () => {
  const user = userEvent.setup()

  render(<Navbar />)

  await user.click(screen.getByRole('button'))
})
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '../contexts/theme-context'

test('renders correctly when wrapped manually in ThemeProvider', () => {
  rtlRender(
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  )

  expect(
    screen.getByText(/intern dashboard/i)
  ).toBeInTheDocument()
})

/*
This test is equivalent to using customRender from test-utils.

customRender automatically wraps every component with ThemeProvider,
so we don't have to repeat the wrapper in every test.
*/