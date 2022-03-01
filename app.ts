function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number) {
  console.log("Result" + num)
}
let combineValues: (a: number, b: number) => number
combineValues = add
printResult(combineValues(5, 12))
