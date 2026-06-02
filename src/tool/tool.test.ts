import { describe, expect, test } from "vitest";
import { increment } from "./index";

describe("test increment", () => {
  test("increment 1 to be 2", ()=> {
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
