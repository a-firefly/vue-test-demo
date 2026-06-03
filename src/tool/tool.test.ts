import { describe, expect, test } from 'vitest'
import { compileCode, increment } from './index'

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


describe('match array', () => {
  test('shoppingList contains milk', () => {
    const shoppingList = ['milk', 'bread', 'eggs', 'butter']
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
  })

  const james = {name: 'james', age: 33}
  const owen = {name: 'Owen', age: 22}
  const reves = {name: 'reves', age: 20}
  const team = [james, owen, reves]
  test('team contains james', () => {
    expect(team).toContain(james)
  })
})

describe('match object', () => {
  const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    createdAt: '2024-01-01',
    address: { city: 'Paris', zip: '75001' },
    roles: ['viewer', 'admin'],
  }

  test('user has expected fileds', () => {
    // 这里我们只关心 name 和 email
    expect(user).toMatchObject({
      id: 1,
      email: 'alice@example.com',
    })
  })

  test('object has property and optional value', () => {
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('name', 'Alice')
    expect(user).toHaveProperty('address.city')
    expect(user).toHaveProperty('address.city', 'Paris')
  })

  test('user has the right shape', () => {
    expect(user).toEqual({
      id: expect.any(Number),
      name: 'Alice',
      createdAt: expect.stringMatching(/\d{4}-\d{2}-\d{2}/),
      email: expect.stringContaining('@'),
      roles: expect.arrayContaining(['viewer']),
      address: expect.any(Object),
    })
  })

  test('compiling an empty string throws', () => {
    // 检查是否抛出异常
    expect(() => compileCode('')).toThrow()
    // 检查错误信息
    expect(() => compileCode('')).toThrow('Cannot compile empty string')
    // 使用正则表达式检查错误信息
    expect(() => compileCode('')).toThrow(/empty string/)
  })
})

describe('soft asset', () => {
  test('check multiple fields', () => {
    const user = { name: 'james', age: 33, role: 'admin' }
    expect.soft(user.name).toBe('james')
    expect.soft(user.age).toBe(33)
    expect.soft(user.role).toBe('admin')
  })
})
