// //type AddFn = (a: number, b: number) => number

// interface AddFn {
//   (a: number, b: number): number
// }
// let add: AddFn
// add = (n1: number, n2: number) => {
//   return n1 + n2
// }
// interface Named {
//   readonly name?: string
//   outputName?: string
// }

// interface Greatable extends Named {
//   greet(phrase: string): void
// }
// class Person implements Greatable {
//   name?: string
//   age = 30
//   constructor(n?: string) {
//     if (n) {
//       this.name = n
//     }
//   }
//   greet(phrase: string): void {
//     if (this.name) {
//       0
//       console.log(phrase + " " + this.name)
//     } else {
//       console.log("Hi!")
//     }
//   }
// }
// let user1: Greatable
// user1 = new Person()
// user1.greet("How is life")
