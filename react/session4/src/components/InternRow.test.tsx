import { render, screen } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import InternRow from './InternRow'
import { test, expect,vi } from 'vitest'

test('finds the Remove button by role', () => {
  render(
    <table>
      <tbody>
        <InternRow
          id={1}
          name="Rahul"
          score={92}
          onRemove={() => {}}
        />
      </tbody>
    </table>
  )

  const removeButton = screen.getByRole('button', {
    name: 'Remove',
  })

  expect(removeButton).toBeInTheDocument()
})

test('calls onRemove with correct id', async () => {
  const user = userEvent.setup()
  const onRemove = vi.fn()

  render(
    <table>
      <tbody>
        <InternRow
          id={1}
          name="Rahul"
          score={92}
          onRemove={onRemove}
        />
      </tbody>
    </table>
  )

  await user.click(
    screen.getByRole('button', { name: 'Remove' })
  )

  expect(onRemove).toHaveBeenCalledTimes(1)
  expect(onRemove).toHaveBeenCalledWith(1)
})
test('no console errors during render', () => {
  const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

  render(
    <table>
      <tbody>
    <InternRow
      id={1}
      name="Rahul"
      score={92}
      onRemove={() => {}}
    />
    </tbody>
     </table>
  )

  expect(spy).not.toHaveBeenCalled()

  spy.mockRestore()
})
// vi.fn() creates a mock function that records calls.
// vi.mock() replaces an entire module with a mocked implementation.
// vi.spyOn() watches an existing function without replacing its original behavior unless mocked.