class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}
const lgg = new Doggy("Lg", 13)
console.log(lgg.name)

class DogList {
  private doggies: Doggy[] = []

  static instance: DogList = new DogList()
  private constructor() {}
}
DogList.instance

const dl = new DogList()
