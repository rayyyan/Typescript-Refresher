function myLogFunc() {
  return (str: string) => {
    console.log(str)
  }
}
const logger = myLogFunc()
logger("Hello")

// func create class

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = ""
    log(str: string) {
      console.log(str)
      this.completeLog += str + "\n"
    }
    dumpLog() {
      return this.completeLog
    }
  }
}
const classLogger = createLoggerClass()
const logger2 = new classLogger()
logger2.log("hello")

// Funcs creating generic classes

function createSimpleMemoryDatabase<T>() {
  return class createSimpleMemoryDatabase {
    private db: Record<string, T> = {}
    set(id: string, value: T) {
      this.db[id] = value
    }
    get(id: string): T {
      return this.db[id]
    }
    getObject(): object {
      return this.db
    }
  }
}

const StringDatabase = createSimpleMemoryDatabase<string>()
const sdb1 = new StringDatabase()
sdb1.set("a", "Hello")
