
export function increment(x:number, max: number = 10): number {
  if (x < max) {
    x += 1
  }
  return x
}

export function compileCode(code:string) {
  if (code === '') {
    throw new Error('Cannot compile empty string')
  }
  return code
}
