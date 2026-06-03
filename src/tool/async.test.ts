import { fetchData, fetchUser } from './async'

test('fetch user by id', async () => {
  const user = await fetchUser('1')
  expect(user.id).toBe('1')
  expect(user.name).toBe('james')
})


test('resolves to james', async () => {
  await expect(fetchUser('1')).resolves.toMatchObject({name: 'james'})
})

test('reject with an error', async () => {
  await expect(fetchUser('')).rejects.toThrow('id cannot be empty')
})

describe('count assertion', () => {
  test('no data but no fail', async () => {

    // expect.hasAssertions()

    const data = await fetchData(0)
    data.forEach((item) => {
      expect(item.id).toBeDefined()
      expect(item.id).toBe('0')
    })
  })

  test('both callbacks are called', async () => {
    expect.assertions(2)

    await Promise.all([
      fetchUser('1').then(user => expect(user.id).toBe('1')),
      fetchUser('2').then(user => expect(user.id).toBe('2'))
    ])
  })
})
