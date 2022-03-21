abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {}
  abstract getSpecialAttack(): string
}
//Cant instanciate
const ryu = new StreetFighter()
