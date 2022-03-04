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
function merge<T extends object, Z extends object | number>(a: T, b: Z) {
  return Object.assign(a, b)
}
const merged = merge(rayan, job)
//const merged = Object.assign(rayan, job)
console.log(merged.job)
