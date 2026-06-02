import { expect, test } from "vitest";
import { createUser } from ".";

test('create user with the correct fields', () => {
  const user = createUser('james', 33)
  expect(user).toEqual({name: 'james', age: 33})
})

test('create user with the age 0', () => {
  const user = createUser('james', 0)
  expect(user).toEqual({name: 'james', age: 0})
})

test.skip('not ready yet', () => {

})

test.todo('implement validation later')
