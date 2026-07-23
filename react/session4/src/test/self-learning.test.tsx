import { describe, test, expect, vi } from 'vitest'

describe('Fake Timers', () => {
  test('fast forwards setTimeout', () => {
    vi.useFakeTimers()

    let loading = true

    setTimeout(() => {
      loading = false
    }, 3000)

    expect(loading).toBe(true)

    vi.runAllTimers()

    expect(loading).toBe(false)

    vi.useRealTimers()
  })
})

/*
vi.useFakeTimers() replaces real timers with mock timers.

vi.runAllTimers() instantly executes every pending timer
without waiting for real time.
*/
import { render, screen, within } from './test-utils'
import InternCard from '../components/InternCard'

describe('within helper', () => {
  test('finds elements inside one InternCard only', () => {
    render(
      <div>
        <InternCard name="Rahul" score={92} isPresent={true} />
        <InternCard name="Priya" score={78} isPresent={false} />
      </div>
    )

    // Find Rahul's card
    const rahulName = screen.getByText('Rahul')

    // Get the card container
    const rahulCard = rahulName.parentElement!

    // Search only inside Rahul's card
    expect(
      within(rahulCard).getByText('Score: 92')
    ).toBeInTheDocument()
  })
})

/*
within() limits queries to a specific section of the page.
It is useful when multiple components contain similar text.
*/