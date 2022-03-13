export function printToFile(text: string, callback: () => void): void {
  console.log(text)
  callback()
}
//function type
interface MutationFunc {
  (n: number): number
}

type MutationFuncType = (v: number) => number
export function arrayMutate(
  numbers: number[],
  mutate: MutationFuncType
): number[] {
  return numbers.map(mutate)
}
const meta = (n: number): number => {
  return n * 10
}
const myNewFunc: MutationFuncType = (v: number) => v * 5
console.log(arrayMutate([1, 2, 3], meta))

//func return a func

export function createAdder(num: number) {
  return (val: number) => num + val
}
const addOne = createAdder(1)
console.log(addOne(55))
console.log(addOne(5))
