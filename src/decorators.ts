function Logger() {
  return function (constructor: Function) {
    console.log("Logging...")
    console.log(constructor)
  }
}
function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)
    if (hookEl) {
      hookEl.innerHTML = template
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

class Product {
  @Log
  title: string
  private _price: number
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
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax)
  }
}
