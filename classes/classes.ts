//Db

interface DataBase<T, K> {
  get(id: K): T
  set(id: K, value: T): void
}
interface Persistable {
  saveToString(): string
  restoreFromString(storedState: string): void
}
type DBKeyType = string | number | symbol
class InMemoryDb<T, K extends DBKeyType> implements DataBase<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>

  get(id: K): T {
    return this.db[id]
  }
  set(id: K, value: T): void {
    this.db[id] = value
  }
}
//Persistable in memory Db
class PersistableMemoryDb<T, K extends DBKeyType>
  extends InMemoryDb<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db)
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState)
  }
}
const myDb = new InMemoryDb<string, string>()
myDb.set("01", "bar")
console.log(myDb.get("01"))
