interface Cat {
  name: string
  breed: string
}
type ReadOnlyCat = Readonly<Cat>
function makeCat(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed,
  }
}
const usul = makeCat("Usul", "Tabby")
//
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z]
}
const c1 = makeCoordinate(10, 20, 30)

//
const reallyConst = <const>[1, 2, 3]
const reallyConstTwo = [1, 2, 3] as const
