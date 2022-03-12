function Logger() {
  return function (constructor: Function) {
    console.log("Logging...")
    console.log(constructor)
  }
}
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()
        const hookEl = document.getElementById(hookId)
        const p = new originalConstructor()
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector("h1")!.textContent = this.name
        }
      }
    }
  }
}

@WithTemplate("<h1>Hello app</h1>", "app")
class Person {
  name = "Abdou"
  constructor() {
    console.log("creatin person object")
  }
}

const person1 = new Person()
console.log(person1)

//More about Decorators

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!")
  console.log(target, propertyName)
}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessor decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Param decorator")
  console.log(target)
  console.log(name)
  console.log(position)
}
class Product {
  @Log
  title: string
  private _price: number
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error("inavalid price-should be positive!")
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}
