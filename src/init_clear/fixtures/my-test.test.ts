import { test } from "./my-test";

test('user is created', ({db, user}) => {
  expect(db.status).toBe('open')
  expect(user.name).toBe('alice')
})
