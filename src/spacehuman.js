export default class SpaceHuman {
  constructor(inputAge, lifeExpectancy, spaceYears, mercuryAge, mercuryLifeExpectancy, venusAge, venusLifeExpectancy, marsAge, marsLifeExpectancy, jupiterAge, jupiterLifeExpectancy) {
    this.inputAge = inputAge;
    this.lifeExpectancy = lifeExpectancy;
    this.spaceYears = spaceYears;
    this.mercuryAge = mercuryAge;
    this.mercuryLifeExpectancy = mercuryLifeExpectancy;
    this.venusAge = venusAge;
    this.venusLifeExpectancy = venusLifeExpectancy;
    this.marsAge = marsAge;
    this.marsLifeExpectancy = marsLifeExpectancy;
    this.jupiterAge = jupiterAge;
    this.jupiterLifeExpectancy = jupiterLifeExpectancy;
  }

  planets() {
    this.mercuryAge = Math.floor(this.inputAge / 0.24);
    this.mercuryLifeExpectancy = Math.floor(this.lifeExpectancy / 0.24);
    this.venusAge = Math.floor(this.inputAge / 0.62);
    this.venusLifeExpectancy = Math.floor(this.lifeExpectancy / 0.62);
    this.marsAge = Math.floor(this.inputAge / 1.88);
    this.marsLifeExpectancy = Math.floor(this.lifeExpectancy / 1.88);
    this.jupiterAge = Math.floor(this.inputAge / 11.86);
    this.jupiterLifeExpectancy = Math.floor(this.lifeExpectancy / 11.86);
  }

  years() {
    if (this.inputAge < this.lifeExpectancy) {
      this.spaceYears = this.lifeExpectancy - this.inputAge;
    } else if (this.inputAge > this.lifeExpectancy) {
      this.spaceYears = this.inputAge - this.lifeExpectancy;
    } 
    else if (this.inputAge === this.lifeExpectancy) {
      return "Congrats! You made it to your life expectancy!";
    }
  }
}