const state = <T>(init: T): [() => T, (v: T) => void] => {
  let val: T = init
  return [
    () => val,
    (v: T) => {
      val = v
    },
  ]
}
const [tate, setState] = state(4)
console.log(tate())
setState(52)
console.log(tate())

//Null or string

const [mate, setMate] = state<string | null>(null)
console.log(mate())
setMate("string")
console.log(mate())
