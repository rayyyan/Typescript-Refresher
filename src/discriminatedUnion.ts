interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Hoarse {
  type: "hoarse"
  runningSpeed: number
}

type Animal = Bird | Hoarse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "hoarse":
      speed = animal.runningSpeed
  }
  console.log("Moving at speed: " + speed)
}
