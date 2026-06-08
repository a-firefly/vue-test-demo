import { calculator } from './mock.ts'

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

test('spy on a method', () => {
  const calc = new calculator()
  const spy = vi.spyOn(calc, 'add')
  // 原始的实现仍然可以工作
  expect(calc.add(1, 2)).toBe(3)

  // 我们可以观察调用
  expect(spy).toHaveBeenCalledWith(1, 2)
  expect(spy).toHaveBeenCalledTimes(1)
})

test('spy can override implementation', () => {
  const calc = new calculator()
  const spy = vi.spyOn(calc, 'add')
  spy.mockReturnValue(10)
  // 原始的实现已经不可以工作
  expect(calc.add(1, 2)).toBe(10)

  // 我们可以观察调用
  expect(spy).toHaveBeenCalledWith(1, 2)
  expect(spy).toHaveBeenCalledTimes(1)
})

test('spy can override implementation', () => {
  const calc = new calculator()
  // 原始的实现已经不可以工作
  expect(calc.add(1, 2)).toBe(3)

  // expect(spy).toHaveBeenCalledWith(1, 2)
  // expect(spy).toHaveBeenCalledTimes(1)
})
