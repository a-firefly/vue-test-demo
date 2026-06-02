
export function increment(x:number, max: number = 10): number {
  if (x < max) {
    x += 1
  }
  return x
}
