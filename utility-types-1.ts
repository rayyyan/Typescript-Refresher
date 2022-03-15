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
