const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
}

console.log(fetchedUserData?.job?.title)

// Nullish chaining

const userInput = ""

const storedData = userInput || "DEFAULT" // take DEFAULT

const storedDataTS = userInput ?? "DEFAULT" // take " "

console.log(storedData)
console.log(storedDataTS)
