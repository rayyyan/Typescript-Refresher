function add(n1: number, n2: number) {
  return n1 + n2
}

function printResult(num: number) {
  console.log("Result" + num)
}

function addHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2
  cb(result)
}
let combineValues: (a: number, b: number) => number
combineValues = add
printResult(combineValues(5, 12))

addHandle(10, 20, (result) => {
  console.log(result)
})
