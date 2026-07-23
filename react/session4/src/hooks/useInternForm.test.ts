import { renderHook, act } from '@testing-library/react'
import useInternForm from './useInternForm'
import { test, expect } from 'vitest'

test('initial state is empty', () => {
  const { result } = renderHook(() => useInternForm())

  expect(result.current.form.name).toBe('')
  expect(result.current.form.score).toBe(0)
})

test('validation fails for empty name', () => {
  const { result } = renderHook(() => useInternForm())

  let valid = false

  act(() => {
    valid = result.current.isValid()
  })

  expect(valid).toBe(false)
  expect(result.current.error).toBe('Name is required')
})

test('reset clears the form', () => {
  const { result } = renderHook(() => useInternForm())

  act(() => {
    result.current.handleReset()
  })

  expect(result.current.form.name).toBe('')
  expect(result.current.error).toBe('')
})

test('shows error when name is empty', () => {
  // Arrange
  const { result } = renderHook(() => useInternForm())

  // Act
  act(() => {
    result.current.isValid()
  })

  // Assert
  expect(result.current.error).toBe('Name is required')
})
test('returns true when name is Sneha and score is 88', () => {
  // Arrange
  const { result } = renderHook(() => useInternForm())

  // Act
  act(() => {
    result.current.handleChange({
      target: {
        name: 'name',
        value: 'Sneha',
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>)

    result.current.handleChange({
      target: {
        name: 'score',
        value: '88',
        type: 'number',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  // Assert
  expect(result.current.isValid()).toBe(true)
})
test('handleChange updates the name field', () => {
  // Arrange
  const { result } = renderHook(() => useInternForm())

  // Act
  act(() => {
    result.current.handleChange({
      target: {
        name: 'name',
        value: 'Sneha',
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>)
  })

  // Assert
  expect(result.current.form.name).toBe('Sneha')
})