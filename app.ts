const person = {
  name: "Rayan",
  age: 24,
  hobbies: ["Sports", "Coding"],
}

let favActivities: string[]
favActivities = ["Sports"]
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
