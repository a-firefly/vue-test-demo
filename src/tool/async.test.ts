import { fetchData, fetchUser, slowTask } from './async'

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

// 默认 5s 超时
// test('slow task', async () => {
//   const result = await slowTask(6000)
//   expect(result).toBe('done')
// }, 8000)
// 注释掉，防止拖慢执行时间

// 测试结果为 fail
test('this causes an unhandled rejection error', () => {
  // 这个Promise 会 reject 但未被 await 或者 catch
  // Promise.reject(new Error('oops'))
})

// 要想测试结果为 success
test('handled rejection', async () => {
  // 要么 等待 Promise
  await expect(Promise.reject(new Error('oops'))).rejects.toThrow('oops')
  await expect(Promise.reject('oops')).rejects.toThrow('oops')

  // 要么 不对其进行断言，而是 catch 它
  Promise.reject('oops').catch(() => {})
})
