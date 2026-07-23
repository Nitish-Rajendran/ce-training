import { render, screen } from '../test/test-utils'
import InternCard from './InternCard'
import { test, expect } from 'vitest'

// We import render and screen from test-utils so the component
// is automatically wrapped with ThemeProvider.
test('renders the intern name', () => {
  render(<InternCard name="Rahul" score={92} isPresent={true} />)

  expect(screen.getByText('Rahul')).toBeInTheDocument()
})

test('renders the score', () => {
  render(<InternCard name="Rahul" score={92} isPresent={true} />)

  expect(screen.getByText('Score: 92')).toBeInTheDocument()
})

test('shows Present when isPresent is true', () => {
  render(<InternCard name="Rahul" score={92} isPresent={true} />)

  expect(screen.getByText('Present')).toBeInTheDocument()
})

test('shows Absent when isPresent is false', () => {
  render(<InternCard name="Amit" score={45} isPresent={false} />)

  expect(screen.getByText('Absent')).toBeInTheDocument()
})