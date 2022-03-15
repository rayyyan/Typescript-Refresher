const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
  items.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(["1", "2", "3"], (v) => console.log(`forEach ${v}`))
// filter

// const myFilter = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
//   return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [])
// }

function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
  return items.reduce<T[]>((a, v) => (filterFunc(v) ? [...a, v] : a), [])
}
console.log(myFilter([4, 2, 3, 9, 5], (v) => v % 2 === 0))
