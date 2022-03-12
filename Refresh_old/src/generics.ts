// const names = ["abdou", "rayan"]
// // Generic type
// const gNames: Array<string> = ["abdou", "rayan"]
// gNames[0].slice()
// //Promise

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello")
//   }, 2000)
// })

// promise.then((data) => {
//   data.split(" ")
// })

// // Custom Generic

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB)
// }
// const merged = merge({ name: "rayan" }, { age: 24 })
// console.log(merged.age)

const rayan = {
  name: "rayan",
  age: 14,
}
const job = {
  job: "student",
}
function merge<T extends object, Z extends object>(a: T, b: Z) {
  return Object.assign(a, b)
}
const merged = merge(rayan, job)
//const merged = Object.assign(rayan, job)
console.log(merged.job)

interface Lengthy {
  length: number
}
function countAndPrint<T extends Lengthy>(element: T) {
  let descriptionTest = "Got no value."
  if (element.length === 1) {
    descriptionTest = "Got " + element.length + " element"
  } else if (element.length) {
    descriptionTest = "Got " + element.length + " element"
  }
  return [element, descriptionTest]
}

console.log(countAndPrint(["ff"]))

// The keuof Constraint

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key]
}

console.log(extractAndConvert({ name: "Abdou" }, "name"))

//generic class

class DataStorage<T> {
  private data: T[] = []
  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item))
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()

textStorage.addItem("Abdou")
textStorage.getItems()
textStorage.removeItem("Abdou")

const numberStorage = new DataStorage<number>()

numberStorage.addItem(1)

const objectStorage = new DataStorage<object>()
//this doesn't work only works on primitive types
// objectStorage.addItem({ name: "seddik" })
// objectStorage.addItem({ name: "rayan" })
// objectStorage.removeItem({ name: "seddik" })
// console.log(objectStorage.getItems())
// console.log(objectStorage)
