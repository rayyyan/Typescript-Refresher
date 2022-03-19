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

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    newValue: Type[Property]
  ) => void
}
function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented"
}
const lg: DogInfo = {
  name: "LG",
  age: 13,
}
type DogInfoListeners = Listeners<DogInfo>
listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
})
