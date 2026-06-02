import { add } from ".";

test("Math.sqrt works for perfect squares", () => {
  expect(Math.sqrt(4)).toBe(2)
  expect(Math.sqrt(144)).toBe(12)
  expect(Math.sqrt(0)).toBe(0)
})

describe("Math.sqrt", () => {
  test('returns the square root of perfect squares', () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt(9)).toBe(3)
  })

  test('returns NaN for negative numbers', () => {
    expect(Math.sqrt(-1)).toBeNaN()
  })

  test('returns 0 for 0', () => {
    expect(Math.sqrt(0)).toBe(0)
  })
})

test.for([
  [1, 2, 3],
  [1, -1, 0],
  [1, 0, 1],
])('add(%i, %i) -> %i', ([a, b, expected]) => {
  expect(add(a, b)).toBe(expected)
})

test.for([
  {a: 1, b: 2, expected: 3},
  {a: 0, b: 0, expected: 0},
  {a: -1, b: -2, expected: -3},
])('add($a, $b) = $expected', ({a, b, expected}) => {
  expect(add(a, b)).toBe(expected)
})

test.concurrent.for([
  [1, 2, 3],
  [1, -1, 0],
  [1, 0, 1],
])('concurrent add(%i, %i) -> %i', ([a, b]) => {
  expect(add(a, b)).toMatchSnapshot()
})
