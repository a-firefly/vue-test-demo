export class database {
  status: string
  constructor() {
    console.log('db init')
    this.status = 'open'
  }

  createUser(name: string, age: number) {
    return Promise.resolve({name, age})
  }

  close(): Promise<void> {
    return new Promise((resolve) => {
      this.status = 'close'
      console.log('close db')
      resolve()
    })
  }
}

export function createDatabase(): Promise<database> {
  return new Promise((resolve) => {
    const db = new database()
    resolve(db)
  })
}
