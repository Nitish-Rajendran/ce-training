import { test, expect } from 'vitest'

test('loads interns from API', async () => {
  const response = await fetch('http://localhost:5173/api/interns')

  const data = await response.json()

  expect(data).toHaveLength(4)
})

/*
FIRST Principles Violated:
Fast and Repeatable

The test depends on a running API server and network.
It may fail in CI or on another machine.
*/