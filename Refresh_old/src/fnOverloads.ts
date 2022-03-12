type Combinable = string | number
function add(n1: string, n2: string): string
function add(n1: number, n2: number): number
function add(n1: number, n2: string): number
function add(n1: string, n2: number): number
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString()
  }
  return a + b
}
const result = add("Avdou ", "Rayan")
result.split(" ")
