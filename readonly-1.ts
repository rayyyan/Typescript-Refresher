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
