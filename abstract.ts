abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {}
  abstract getSpecialAttack(): string
}
//Cant instantiate
const ryuCant = new StreetFighter()

class Ryu extends StreetFighter {
  move() {}
  fight() {}
  //when inherits a class that have abstract method it means that it's required
  getSpecialAttack(): string {
    return "Hadoken"
  }
}
const ryu = new Ryu()

console.log(ryu.getSpecialAttack())
