// interface ObjectTypeI {
//   name: string
//   age: number
// }
// type ObjectType = { name: string; age: number }

// const funcP = (person: ObjectType) => {
//   console.log(person.age)
// }
// funcP({ name: "see", age: 15 })

interface Coordinate {
  x: number
  y: number
}

function ParseCoordinate(obj: Coordinate): Coordinate
function ParseCoordinate(str: string): Coordinate
function ParseCoordinate(x: number, y: number): Coordinate
function ParseCoordinate(agr1: unknown, arg2?: unknown): Coordinate {
  let coordinate: Coordinate = {
    x: 0,
    y: 0,
  }
  if (typeof agr1 === "string") {
    agr1.split(",").forEach((str) => {
      const [key, value] = str.split(":")
      console.log(str.split(":")[0])
      coordinate[<"x" | "y">key] = +value
    })
  } else if (typeof agr1 === "object") {
    coordinate = {
      ...(<Coordinate>agr1),
    }
  } else {
    coordinate = {
      x: <number>agr1,
      y: <number>arg2,
    }
  }
  return coordinate
}
console.log(ParseCoordinate(5, 6))
console.log(ParseCoordinate({ x: 5, y: 6 }))
console.log(ParseCoordinate("x:5,y:6"))
