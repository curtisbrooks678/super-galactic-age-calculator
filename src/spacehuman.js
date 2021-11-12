export default class SpaceHuman {
  constructor(inputAge, lifeExpectancy) {
    this.inputAge = inputAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercury() {
    this.inputAge = Math.floor(this.inputAge / 0.24);
    this.lifeExpectancy = Math.floor(this.lifeExpectancy / 0.24);
  }   

  venus() {
    this.inputAge = Math.floor(this.inputAge / 0.62);
    this.lifeExpectancy = Math.floor(this.lifeExpectancy / 0.62);
  }   

  mars() {
    this.inputAge = Math.floor(this.inputAge / 1.88);
    this.lifeExpectancy = Math.floor(this.lifeExpectancy / 1.88);
  }   

  jupiter() {
    this.inputAge = Math.floor(this.inputAge / 11.86);
    this.lifeExpectancy = Math.floor(this.lifeExpectancy / 11.86);
  }

  yearsLeft() {
    return this.lifeExpectancy - this.inputAge;
  }

  yearsSurpassed() {
    return this.inputAge - this.lifeExpectancy;
  }
}