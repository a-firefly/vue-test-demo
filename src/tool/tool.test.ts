import { describe, expect, test } from 'vitest'
import { increment } from './index'

describe('test increment', () => {
  test('increment 1 to be 2', () => {
    expect(increment(1)).toBe(2)
  })
})

test('null checks', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeFalsy()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
})

test('zero', () => {
  const z = 0
  expect(z).toBe(0)
  expect(z).toBeFalsy()
  expect(z).toBeDefined()
  expect(z).not.toBeNull()
})

test('number comparisons', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)

  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('adding float point numbers', () => {
  const value = 0.1 + 0.2
  expect(value).not.toBe(0.3)
  expect(value).toBeCloseTo(0.3)
})

describe('match string', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })
  test('version string matches semver format', () => {
    expect('vitest@4.2.0').toMatch(/vitest@\d+\.\d+\.\d+/)
  })
})
