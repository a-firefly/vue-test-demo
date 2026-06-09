let nextId = 1

export interface Item {
  id: number
  text: string
  completed: boolean
}

export function createTodoList() {
  const items: Item[] = []
  return {
    add(text: string): Item {
      if (!text.trim()) {
        throw new Error('Todo text cannot be empty')
      }

      const todo = {id: nextId++, text, completed: false}
      items.push(todo)
      return todo
    },
    remove(id: number) {
      const idx = items.findIndex(item => item.id === id)
      if (idx === -1) {
        throw new Error(`Todo with id ${id} not found`)
      }

      items.splice(idx, 1)
    },
    toggle(id: number) {
      const todo = items.find(item => item.id === id)
      if (!todo) {
        throw new Error(`Todo with id ${id} not found`)
      }

      todo.completed = !todo.completed
    },
    getAll(): Item[] {
      return items
    },
    getCompleted(): Item[] {
      return items.filter(item => item.completed)
    }
  }
}
