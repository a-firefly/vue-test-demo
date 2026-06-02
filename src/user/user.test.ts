import { expect, test } from "vitest";
import { createUser } from "@/user";

test('create user with the correct fields', () => {
  const user = createUser('james', 33)
  expect(user).toEqual({name: 'james', age: 33})
})

test('create user with the age 0', () => {
  const user = createUser('james', 0)
  expect(user).toEqual({name: 'james', age: 0})
})

test('object assignment', () => {
  const data = { one: 1, two: 2}
  expect(data).toEqual({one: 1, two: 2})
  expect(data).not.toBe({one: 1, two: 2})
})

test('toEqual vs toStrictEqual', () => {
  const a = {a: 1}
  const b = {a: 1, b: undefined}
  // toEqual 忽略 undefined 属性
  expect(a).toEqual(b)
  // toEqual 不忽略 undefined 属性
  expect(a).not.toStrictEqual(b)

  class User {
    name: string
    constructor(name: string) {
      this.name = name
    }
  }
  const user = new User('james')
  const james = {name: 'james'}
  // toEqual 不检查对象类型
  expect(user).toEqual(james)
  // toStrictEqual 检查对象类型
  expect(user).not.toStrictEqual(james)
})

test.skip('not ready yet', () => {

})

test.todo('implement validation later')
