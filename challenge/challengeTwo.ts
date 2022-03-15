const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
  items.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(["1", "2", "3"], (v) => console.log(`forEach ${v}`))
// filter

const myFilter = <T>(items: T[], filterFunc: (v: T) => boolean): T[] => {
  return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as T[])
}

// function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
//   return items.reduce<T[]>((a, v) => (filterFunc(v) ? [...a, v] : a), [])
// }
console.log(myFilter([4, 2, 3, 9, 5], (v) => v % 2 === 0))

//myMap

const myMap = <T, K>(items: T[], myMapFunc: (v: T) => K): K[] => {
  return items.reduce((a, v) => [...a, myMapFunc(v)], [] as K[])
}
console.log(myMap([1, 5, 6, 88, 74, 21, 47], (v) => (v * 10).toString()))
