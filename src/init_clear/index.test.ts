
let items: string[] = []

/* beforeEach afterEach */
beforeEach(() => {
  console.log('beforeEach')
  items = ['apple', 'banana', 'cherry']

  // 这里返回的匿名函数，会在 每个test 结束之后(也在afterEach之后，test 内的onTestFinished之前)，执行
  return () => {
    console.log('beforeEach onTestFinished')
  }
})

afterEach(() => {
  items = []
  console.log('afterEach')
})

test('items start with 3 fruits', () => {
  expect(items).toHaveLength(3)
  items.push('pear')
  expect(items).toHaveLength(4)
})

test('add an item', () => {
  items.push('orange')
  expect(items).toHaveLength(4)
})


/* onTestFinished */
test('use onTestFinished', () => {
  let num = 1
  onTestFinished(() => {
    num = 0
    console.log('onTestFinished:', num)
  })
  num += 1
  expect(num).toBe(2)
  console.log('test done')
})
