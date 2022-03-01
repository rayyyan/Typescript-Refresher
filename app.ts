function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return n1 + n2
  }
}

const num1 = 5
const num2 = 2.5
const printResult = true
const phrase = "Result is :"
add(num1, num2, printResult, phrase)
