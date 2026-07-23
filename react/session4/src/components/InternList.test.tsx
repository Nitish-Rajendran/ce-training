import { render, screen } from '../test/test-utils'
import InternList from './InternList'
import { test, expect } from 'vitest'
const interns = [
  {
    id: 1,
    name: 'Rahul',
    score: 92,
    role: 'Frontend',
    isPresent: true,
  },
]

test('shows intern name', () => {
  render(
    <InternList
      interns={interns}
      onRemove={() => {}}
    />
  )

  expect(screen.getByText('Rahul')).toBeInTheDocument()
})