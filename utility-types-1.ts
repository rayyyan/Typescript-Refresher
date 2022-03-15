interface MyUser {
  name: string
  id: string
  email?: string
}
type MyUserOptionals = Partial<MyUser>
const merges = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return { ...user, ...overrides }
}
console.log(
  merges(
    {
      name: "Rayan",
      id: "foo",
      email: "gmail.com",
    },
    {
      email: "gmail.cosssm",
    }
  )
)

///Required
type RequiredMyUser = Required<MyUser>

//Pick

type justEmailAndName = Pick<MyUser, "email" | "name">

const mapById = (users: MyUser[]): Record<string, Omit<MyUser, "id">> => {
  return users.reduce((a, v) => {
    const { id, ...rest } = v
    return {
      ...a,
      [id]: rest,
    }
  }, {})
}

console.log(
  mapById([
    { id: "foo", name: "Mr. Foo" },
    { id: "baz", name: "Mrs.Baz" },
  ])
)
