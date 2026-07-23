import { test, expect } from 'vitest'

test("score report has today's date", () => {
  const report = {
    date: new Date().toISOString().slice(0, 10),
  }

  expect(report.date).toBe('2024-11-15')
})

/*
FIRST Principle Violated:
Repeatable

The expected date is hardcoded.
The test fails on any day other than 2024-11-15.
*/