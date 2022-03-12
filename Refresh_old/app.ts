//unknown
let userInput: unknown
let userName: string
userInput = 5

userInput = "String"

if (typeof userInput === "string") {
  userName = userInput
}

//never

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
  // while(true){}
}

generateError("An Error occured", 500)
