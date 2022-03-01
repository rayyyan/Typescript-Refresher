const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string] //Tuples
} = {
  name: "Rayan",
  age: 24,
  hobbies: ["Sports", "Coding"],
  role: [2, "author"],
}
person.role[0] = 10
person.role[1] = "Admin"
let favActivities: string[]
favActivities = ["Sports"]
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby)
}
