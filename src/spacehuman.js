export default class SpaceHuman {
  constructor(inputAge, lifeExpectancy, spaceYears, mercuryAge, mercuryLifeExpectancy, venusAge, venusLifeExpectancy, marsAge, marsLifeExpectancy, jupiterAge, jupiterLifeExpectancy, mercuryYearsLeft, mercuryYearsAhead, venusYearsLeft, venusYearsAhead, marsYearsLeft, marsYearsAhead, jupiterYearsLeft, jupiterYearsAhead) {
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
    this.mercuryYearsLeft = mercuryYearsLeft;
    this.mercuryYearsAhead = mercuryYearsAhead;
    this.venusYearsLeft = venusYearsLeft;
    this.venusYearsAhead = venusYearsAhead;
    this.marsYearsLeft = marsYearsLeft;
    this.marsYearsAhead = mercuryYearsAhead;
    this.jupiterYearsLeft = jupiterYearsLeft;
    this.jupiterYearsAhead = jupiterYearsAhead;
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
    this.mercuryYearsLeft = this.mercuryLifeExpectancy - this.mercuryAge;
    this.venusYearsLeft = this.venusLifeExpectancy - this.venusAge;
    this.marsYearsLeft = this.marsLifeExpectancy - this.marsAge;
    this.jupiterYearsLeft = this.jupiterLifeExpectancy - this.jupiterAge;
    this.mercuryYearsAhead = this.mercuryAge - this.mercuryLifeExpectancy;
    this.venusYearsAhead = this.venusAge - this.venusLifeExpectancy;
    this.marsYearsAhead = this.marsAge - this.marsLifeExpectancy;
    this.jupiterYearsAhead = this.jupiterAge - this.jupiterLifeExpectancy;
    if (this.inputAge === this.lifeExpectancy) {
      return "Congrats! You made it to your life expectancy!";
    }
  }
}