//Db

interface DataBase<T> {
  get(id: string): T
  set(id: string, value: T): void
}
interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}
class InMemoryDb<T> implements DataBase<T> {
  constructor() {}
  protected db: Record<string, T> = {}
  get(id: string): T {
    return this.db[id]
  }
  set(id: string, value: T): void {
    this.db[id] = value
  }
}
//Persistable in memory Db
class PersistableMemoryDb<T> extends InMemoryDb<T> implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}
const myDb = new InMemoryDb<string>()
myDb.set("01", "bar")
console.log(myDb.get("01"))
