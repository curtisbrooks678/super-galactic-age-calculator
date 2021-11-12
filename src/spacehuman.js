export default class SpaceHuman {
  constructor(inputAge, lifeExpectancy) {
    this.inputAge = inputAge;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercury() {
    this.inputAge = Math.round(this.inputAge / 0.24);
    return this.inputAge;
  }   
}