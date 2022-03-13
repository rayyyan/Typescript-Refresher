const printIngredient = (
  quantity: string,
  ingredient: string,
  more: string = ""
) => {
  console.log(`${quantity} ${ingredient} ${more ? more : " "}`)
}
printIngredient("1C", "Flour")
printIngredient("1C", "Sugar", "something more")

interface User {
  id: string
  info?: {
    email?: string
  }
}
const getEmail = (user: User): string => {
  if (user.info) {
    return user.info.email!
  }
  return ""
}
const getEmailC = (user: User): string => {
  return user?.info?.email ?? ""
}
//optional callbacks

function addWithCallback(x: number, y: number, cb?: () => void) {
  console.log([x, y])
  //   if (cb) {
  //     cb()
  //   }
  cb?.()
}
