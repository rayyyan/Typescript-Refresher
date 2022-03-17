//Db

interface DataBase {
  get(id: string): string
  set(id: string, value: number): void
}

class InMemoryDb implements DataBase {
  constructor() {}
  get(id: string): string {
    return "hh"
  }

  set(id: string, value: number): void {}
}
