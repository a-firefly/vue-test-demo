import { test as testbase } from 'vitest'
import { createDatabase, database } from './database'

// onCleanup 是哪里来的
export const test = testbase
  .extend('db', async ({}, { onCleanup }) => {
    const db: database = await createDatabase()
    db.createUser('alice', 22)
    onCleanup(() => {
      db.close()
      console.log('did db.close()')
    })
    return db
  })
  .extend('user', async ({ db }) => {
    return await db.createUser('alice', 22)
  })
