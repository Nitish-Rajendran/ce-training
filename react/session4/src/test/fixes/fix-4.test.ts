import { test, expect, vi } from 'vitest'

test('loads interns from mocked API', async () => {
 globalThis.fetch = vi.fn().mockResolvedValue({
    json: async () => [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ],
  }) as any

  const response = await fetch('fake-url')
  const data = await response.json()

  expect(data).toHaveLength(4)
})