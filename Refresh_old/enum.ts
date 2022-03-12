enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "Rayan",
  age: 24,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
}

if (person.role === Role.AUTHOR) {
  console.log("is admin")
}
