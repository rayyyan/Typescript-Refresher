//Db

interface DataBase {
  get(id: string): string
  set(id: string, value: string): void
}
interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}
class InMemoryDb implements DataBase {
  constructor() {}
  protected db: Record<string, string> = {}
  get(id: string): string {
    return this.db[id]
  }
  set(id: string, value: string): void {
    this.db[id] = value
  }
}
//Persistable in memory Db
class PersistableMemoryDb extends InMemoryDb implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}
const myDb = new InMemoryDb()
myDb.set("01", "bar")
console.log(myDb.get("01"))
