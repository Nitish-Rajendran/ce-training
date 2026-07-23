import { renderHook, act } from '@testing-library/react'
import useCounter from './useCounter'
import { test, expect } from 'vitest'

test('starts at zero', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
})

test('increments', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})

test('decrements', () => {
  const { result } = renderHook(() =>
    useCounter({ initial: 5 })
  )

  act(() => {
    result.current.decrement()
  })

  expect(result.current.count).toBe(4)
})

test('resets', () => {
  const { result } = renderHook(() =>
    useCounter({ initial: 10 })
  )

  act(() => result.current.increment())
  act(() => result.current.reset())

  expect(result.current.count).toBe(10)
})