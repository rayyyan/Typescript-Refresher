const myForEach = <T>(items: T[], forEachFunc: (v: T) => void): void => {
  items.reduce((a, v) => {
    forEachFunc(v)
    return undefined
  }, undefined)
}

myForEach(["1", "2", "3"], (v) => console.log(`forEach ${v}`))
