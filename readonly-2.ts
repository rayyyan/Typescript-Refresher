class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}
const lgg = new Doggy("Lg", 13)
console.log(lgg.name)

class DogList {
  private doggies: Doggy[] = []

  public instance: DogList = new DogList()
}
