import { isOdd } from 'lerna-team-is-odd'

export function isEven(n: number): boolean {
  return !isOdd(n)
}
