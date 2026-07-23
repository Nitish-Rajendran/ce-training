import { render, screen } from '../test/test-utils'
import ScoreStats from './ScoreStats'
import { test, expect } from 'vitest'

test('renders ScoreStats component', () => {
  render(<ScoreStats />)

  expect(screen.getByText(/score/i)).toBeInTheDocument()
})