//Db

interface DataBase {
  get(id: string): string
  set(id: string, value: string): void
}

class InMemoryDb implements DataBase {
  constructor() {}
  private db: Record<string, string> = {}
  get(id: string): string {
    return this.db[id]
  }

  set(id: string, value: string): void {
    this.db[id] = value
  }
}
const myDb = new InMemoryDb()
myDb.set("01", "bar")
console.log(myDb.get("01"))
