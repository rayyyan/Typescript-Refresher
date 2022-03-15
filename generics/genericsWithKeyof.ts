const pluck = <DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] => {
  return items.map((item) => item[key])
}
const dogs = [
  { name: "Mimi", age: 12 },
  { name: "LG", age: 12 },
]

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

// Event Map

interface BaseEvent {
  time: number
  user: string
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string }
  checkout: BaseEvent
}
const sendEvent = <Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
): void => {
  console.log(name, data)
}
sendEvent("addToCart", {
  time: 5,
  user: "rayan",
  productID: "foo",
  quantity: 1,
})
sendEvent("checkout", { time: 5, user: "rayan" })
