interface Named {
  readonly name: string
}

interface Greatable extends Named {
  greet(phrase: string): void
}
class Person implements Greatable {
  name: string
  age = 30
  constructor(n: string) {
    this.name = n
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name)
  }
}
let user1: Greatable
user1 = new Person("Max")
user1.greet("How is life")
