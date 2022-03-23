abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {
    console.log(`${this.getName()} attacks with ${this.getSpecialAttack()}`)
  }
  abstract getSpecialAttack(): string
  abstract getName(): string
}
//Cant instantiate
//const ryuCant = new StreetFighter()

class Ryu extends StreetFighter {
  //when inherits a class that have abstract method it means that it's required
  getSpecialAttack(): string {
    return "Hadoken"
  }
  getName(): string {
    return "Ryu"
  }
}
const ryu = new Ryu()

ryu.fight()
