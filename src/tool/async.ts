import type { Interface } from "readline"

export function fetchUser(id:string) {
  if (id === '') {
    return Promise.reject('id cannot be empty')
  }
  return Promise.resolve({ id, name: "james" })
}

interface User {
  id: string
  name: string
}

export function fetchData(num: number): Promise<User[]> {
  const data: User[] = []
  for (let index = 0; index < num; index++) {
    data.push({ id: '${index}', name: '${index}'})
  }
  return Promise.resolve(data)
}

export function slowTask(duration: number) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('done')
    }, duration);
  })

  return promise
}
