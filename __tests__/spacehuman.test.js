import SpaceHuman from '../src/spacehuman.js';

describe('SpaceHuman', () => {
  let spaceHuman;
  let oldSpaceHuman; 

  beforeEach(() => {
    spaceHuman = new SpaceHuman(20, 100);
  });

  beforeEach(() => {
    oldSpaceHuman = new SpaceHuman(120, 100);
  });

  test('should correctly create a spacehuman object with age and life expectancy properties', () => {
    expect(spaceHuman.inputAge).toEqual(20);
    expect(spaceHuman.lifeExpectancy).toEqual(100);
  });

  test('should return age and life expectancy from earth years to mercury years, rounding down', () => {
    spaceHuman.planets();
    expect(spaceHuman.mercuryAge).toEqual(83);
    expect(spaceHuman.mercuryLifeExpectancy).toEqual(416);
  });

  test('should return age and life expectancy from earth years to venus years, rounding down', () => {
    spaceHuman.planets();
    expect(spaceHuman.venusAge).toEqual(32);
    expect(spaceHuman.venusLifeExpectancy).toEqual(161);
  });

  test('should return age and life expectancy from earth years to mars years, rounding down', () => {
    spaceHuman.planets();
    expect(spaceHuman.marsAge).toEqual(10);
    expect(spaceHuman.marsLifeExpectancy).toEqual(53);
  });

  test('should return age and life expectancy from earth years to jupiter years, rounding down', () => {
    spaceHuman.planets();
    expect(spaceHuman.jupiterAge).toEqual(1);
    expect(spaceHuman.jupiterLifeExpectancy).toEqual(8);
  });

  test('should return how many years a user has left on mercury if age is under life expectancy', () => {
    spaceHuman.planets();
    spaceHuman.years();
    expect(spaceHuman.mercuryYearsLeft).toEqual(333);
  });
  
  test('should return how many years a user has left on venus if age is under life expectancy', () => {
    spaceHuman.planets();
    spaceHuman.years();
    expect(spaceHuman.venusYearsLeft).toEqual(129);
  });

  test('should return how many years a user has left on mars if age is under life expectancy', () => {
    spaceHuman.planets();
    spaceHuman.years()
    expect(spaceHuman.marsYearsLeft).toEqual(43);
  });

  test('should return how many years a user has left on jupiter if age is under life expectancy', () => {
    spaceHuman.planets();
    spaceHuman.years()
    expect(spaceHuman.jupiterYearsLeft).toEqual(7);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on mercury', () => {
    oldSpaceHuman.planets();
    oldSpaceHuman.years()
    expect(oldSpaceHuman.mercuryYearsAhead).toEqual(84);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on venus', () => {
    oldSpaceHuman.planets();
    oldSpaceHuman.years()
    expect(oldSpaceHuman.venusYearsAhead).toEqual(32);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on mars', () => {
    oldSpaceHuman.planets();
    oldSpaceHuman.years()
    expect(oldSpaceHuman.marsYearsAhead).toEqual(10);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on jupiter', () => {
    oldSpaceHuman.planets();
    oldSpaceHuman.years()
    expect(oldSpaceHuman.jupiterYearsAhead).toEqual(2);
  });

  test('if user age is equal to life expectancy, return massage that user made it', () => {
    let madeIt = new SpaceHuman(100, 100);
    expect(madeIt.years()).toEqual("Congrats! You made it to your life expectancy!");
  });
});