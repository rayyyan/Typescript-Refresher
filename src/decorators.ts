function Logger(constructor: Function) {
  console.log("Logging...")
  console.log(constructor)
}

@Logger
class Person {
  name = "Abdou"
  constructor() {
    console.log("creatin person object")
  }
}

const person1 = new Person()
console.log(person1)
