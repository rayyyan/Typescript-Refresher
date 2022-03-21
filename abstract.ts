abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {
    console.log(`atack with ${this.getSpecialAttack()}`)
  }
  abstract getSpecialAttack(): string
}
//Cant instantiate
//const ryuCant = new StreetFighter()

class Ryu extends StreetFighter {
  //when inherits a class that have abstract method it means that it's required
  getSpecialAttack(): string {
    return "Hadoken"
  }
}
const ryu = new Ryu()

ryu.fight()
