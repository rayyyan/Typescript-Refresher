function myLogFunc() {
  return (str: string) => {
    console.log(str)
  }
}
const logger = myLogFunc()
logger("Hello")
