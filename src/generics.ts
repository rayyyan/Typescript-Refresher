const names = ["abdou", "rayan"]
// Generic type
const gNames: Array<string> = ["abdou", "rayan"]
gNames[0].slice()
//Promise

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello")
  }, 2000)
})

promise.then((data) => {
  data.split(" ")
})
