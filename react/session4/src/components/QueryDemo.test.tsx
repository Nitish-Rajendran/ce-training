import { render, screen } from '../test/test-utils'
import InternCard from './InternCard'
import { test, expect } from 'vitest'

test('getByText finds the intern name', () => {
  render(
    <InternCard
      name="Rahul"
      score={92}
      isPresent={true}
    />
  )

  expect(screen.getByText('Rahul')).toBeInTheDocument()
})

test('queryByText returns null for missing text', () => {
  render(
    <InternCard
      name="Rahul"
      score={92}
      isPresent={true}
    />
  )

  expect(screen.queryByText('Priya')).not.toBeInTheDocument()
})

test('getAllByText finds multiple elements', () => {
  render(
    <>
      <InternCard name="Rahul" score={92} isPresent={true} />
      <InternCard name="Priya" score={78} isPresent={true} />
    </>
  )

  expect(screen.getAllByText('Present')).toHaveLength(2)
})