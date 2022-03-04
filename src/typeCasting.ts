// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// )
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement

userInputElement.value = "Hi you "

// Index Props
interface ErrorContainer {
  //{email ;"Not a valid email", username:"Must start with a character"}
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
  id: "5854",
  12: "i can put a number as a key",
}
