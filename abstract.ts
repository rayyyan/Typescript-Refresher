abstract class StreetFighter {
  constructor() {}
  move() {}
  fight() {}
  abstract getSpecialAttack(): string
}
const ryu = new StreetFighter()
