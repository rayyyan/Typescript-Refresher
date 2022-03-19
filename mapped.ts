type MyFlexibleDog = {
  name: string
} & Record<string, string>

const dog: MyFlexibleDog = {
  name: "LG",
  breed: "Mutt",
}
// Mapped types

type MyFlexibleCat = {
  name: string
  [key: string]: string | number
}
const cat: MyFlexibleCat = {
  name: "seddik",
  breed: "hero",
}
interface DogInfo {
  name: string
  age: number
}
type OptionsFlags<Type> = {
  [Property in keyof Type]: null
}
type DogInfoOption = OptionsFlags<DogInfo>
