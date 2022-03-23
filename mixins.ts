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
