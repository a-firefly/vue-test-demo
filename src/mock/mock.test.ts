test('mock function basicks', () => {
  const getApples = vi.fn()

  getApples()

  expect(getApples).toHaveBeenCalled()
  expect(getApples).toHaveBeenCalledTimes(1)
})

test('mock return values', () => {
  const getApples = vi.fn()
  // mock 默认返回值
  getApples.mockReturnValue(10)

  expect(getApples()).toBe(10)
  // mock 仅返回此值一次，然后继续返回默认值
  getApples.mockReturnValueOnce(20)
  expect(getApples()).toBe(20)
  expect(getApples()).toBe(10)
})

test('mock async return values', async () => {
  const fetchUser = vi.fn()

  fetchUser.mockResolvedValue({name: 'alice'})
  const user = await fetchUser()
  expect(user.name).toBe('alice')

  fetchUser.mockRejectedValue(new Error('not found'))
  await expect(fetchUser()).rejects.toThrow('not found')
})

test('mock with custom implementation', () => {
  const add = vi.fn()
  add.mockImplementation((a, b) => a + b)

  expect(add(1, 2)).toBe(3)
})
