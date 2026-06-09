import { type Item, createTodoList } from './todoList'

describe('test add', () => {
  test('add a valid item', () => {
    // 确保初始化的是个空数组
    const todoList = createTodoList()
    expect(todoList.getAll()).toHaveLength(0)
    expect(todoList.getAll()).toStrictEqual([])
    // 断言类型

    let text = 'coding'
    let want: Item = {id: 1, text, completed: false}
    let todo = todoList.add(text)
    expect(todoList.getAll()).toHaveLength(1)
    expect(todo).toStrictEqual(want)
    expect(todoList.getAll()[0]).toStrictEqual(want)

    text = 'reading'
    want = {id: 2, text, completed: false}
    todo = todoList.add(text)
    expect(todoList.getAll()).toHaveLength(2)
    expect(todo).toStrictEqual(want)
    expect(todoList.getAll()[1]).toStrictEqual(want)
  })

  test('add a invalid item: empty', () => {
    // 确保初始化的是个空数组
    const todoList = createTodoList()
    expect(todoList.getAll()).toHaveLength(0)
    expect(todoList.getAll()).toStrictEqual([])

    expect(() => todoList.add('')).toThrow('Todo text cannot be empty')
  })
})

describe('test remove', () => {
  test('remove a not found item', () => {
    // 确保初始化的是个空数组
    const todoList = createTodoList()
    expect(todoList.getAll()).toHaveLength(0)
    expect(todoList.getAll()).toStrictEqual([])

    expect(() => todoList.remove(1)).toThrow('Todo with id 1 not found')
  })
  test('remove a found item', () => {
    // 确保初始化的是个空数组
    const todoList = createTodoList()
    expect(todoList.getAll()).toHaveLength(0)
    expect(todoList.getAll()).toStrictEqual([])

    const todo = todoList.add('coding')
    expect(todoList.getAll()).toHaveLength(1)

    todoList.remove(todo.id)
    expect(todoList.getAll()).toHaveLength(0)
  })
})

describe('test toggle', () => {
  test('uncompleted ->/<- completed', () => {
    // 确保初始化的是个空数组
    const todoList = createTodoList()
    expect(todoList.getAll()).toHaveLength(0)
    expect(todoList.getAll()).toStrictEqual([])

    const text = 'coding'
    const todo = todoList.add(text)
    expect(todo.completed).toBe(false)
    todoList.toggle(todo.id)
    expect(todo.completed).toBe(true)
    todoList.toggle(todo.id)
    expect(todo.completed).toBe(false)
    expect(() => todoList.toggle(todo.id + 1)).toThrow(`Todo with id ${todo.id + 1} not found`)
  })
})

describe('test getCompleted', () => {
  test('getCompleted', () => {
    // 确保初始化的是个空数组
    const todoList = createTodoList()
    expect(todoList.getAll()).toHaveLength(0)
    expect(todoList.getAll()).toStrictEqual([])

    expect(todoList.getCompleted()).toHaveLength(0)
    expect(todoList.getCompleted()).toStrictEqual([])

    const text = 'coding'
    const todo = todoList.add(text)
    todoList.toggle(todo.id)
    expect(todoList.getCompleted()).toHaveLength(1)
  })
})
