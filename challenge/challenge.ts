import houses from "./houses"

interface House {
  name: string
  planets: string | string[]
}

interface HouseWithID extends House {
  id: number
}

//Solution
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input
  const rest = filter ? houses.filter(filter) : houses
  return rest.map((house) => ({ id: houses.indexOf(house), ...house }))
}
console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
)

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"))
