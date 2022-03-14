type ThreeDCoordinate = [x: number, y: number, z: number]
function addThree(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]]
}

console.log(addThree([0, 100, 0], [10, 20, 30]))

//
const simpleState = (init: string): [() => string, (v: string) => void] => {
  let str: string = init
  return [
    () => str,
    (v: string) => {
      str = v
    },
  ]
}

const [strGetter, strSetter] = simpleState("Hi")
console.log(strGetter())
strSetter("mama")
console.log(strGetter())
