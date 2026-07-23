import { render, screen, waitFor } from '../test/test-utils'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import AddInternForm from './AddInternForm'

// Keep describe blocks at two levels maximum.
// Too much nesting makes test output difficult to read.

describe('AddInternForm', () => {
  describe('initial state', () => {
    test('name input is empty', () => {
      render(<AddInternForm />)

      expect(
        screen.getByPlaceholderText('Intern Name')
      ).toHaveValue('')
    })

    test('score input starts at 0', () => {
      render(<AddInternForm />)

      expect(
        screen.getByPlaceholderText('Score')
      ).toHaveValue(0)
    })

    test('role defaults to Frontend', () => {
      render(<AddInternForm />)

      expect(
        screen.getByRole('combobox')
      ).toHaveValue('Frontend')
    })
  })

  describe('validation', () => {
    test('shows error when name is empty', async () => {
      const user = userEvent.setup()

      render(<AddInternForm />)

      await user.click(
        screen.getByRole('button', {
          name: /add intern/i,
        })
      )

      expect(
        screen.getByText('Name is required')
      ).toBeInTheDocument()
    })

    test('shows error when score is above 100', async () => {
      const user = userEvent.setup()

      render(<AddInternForm />)

      await user.type(
        screen.getByPlaceholderText('Intern Name'),
        'Rahul'
      )

      await user.clear(
        screen.getByPlaceholderText('Score')
      )

      await user.type(
        screen.getByPlaceholderText('Score'),
        '150'
      )

      await user.click(
        screen.getByRole('button', {
          name: /add intern/i,
        })
      )

      expect(
        screen.getByText('Score must be between 0 and 100')
      ).toBeInTheDocument()
    })

    test('clears error after entering valid data', async () => {
      const user = userEvent.setup()

      render(<AddInternForm />)

      // Trigger validation
      await user.click(
        screen.getByRole('button', {
          name: /add intern/i,
        })
      )

      expect(
        screen.getByText('Name is required')
      ).toBeInTheDocument()

      // Enter valid values
      await user.type(
        screen.getByPlaceholderText('Intern Name'),
        'Rahul'
      )

      await user.clear(
        screen.getByPlaceholderText('Score')
      )

      await user.type(
        screen.getByPlaceholderText('Score'),
        '95'
      )

      // Submit again
      await user.click(
        screen.getByRole('button', {
          name: /add intern/i,
        })
      )

      await waitFor(() => {
        expect(
          screen.queryByText('Name is required')
        ).not.toBeInTheDocument()
      })
    })
  })

  describe('successful submit', () => {
    test('form clears after submit', async () => {
      const user = userEvent.setup()

      render(<AddInternForm />)

      await user.type(
        screen.getByPlaceholderText('Intern Name'),
        'Rahul'
      )

      await user.clear(
        screen.getByPlaceholderText('Score')
      )

      await user.type(
        screen.getByPlaceholderText('Score'),
        '90'
      )

      await user.click(
        screen.getByRole('button', {
          name: /add intern/i,
        })
      )

      await waitFor(() => {
        expect(
          screen.getByPlaceholderText('Intern Name')
        ).toHaveValue('')

        expect(
          screen.getByPlaceholderText('Score')
        ).toHaveValue(0)

        expect(
          screen.getByRole('combobox')
        ).toHaveValue('Frontend')
      })
    })
  })
})