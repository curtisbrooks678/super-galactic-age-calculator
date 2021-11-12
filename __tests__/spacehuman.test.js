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
    spaceHuman.mercury();
    expect(spaceHuman.inputAge).toEqual(83);
    expect(spaceHuman.lifeExpectancy).toEqual(416);
  });

  test('should return age and life expectancy from earth years to venus years, rounding down', () => {
    spaceHuman.venus();
    expect(spaceHuman.inputAge).toEqual(32);
    expect(spaceHuman.lifeExpectancy).toEqual(161);
  });

  test('should return age and life expectancy from earth years to mars years, rounding down', () => {
    spaceHuman.mars();
    expect(spaceHuman.inputAge).toEqual(10);
    expect(spaceHuman.lifeExpectancy).toEqual(53);
  });

  test('should return age and life expectancy from earth years to jupiter years, rounding down', () => {
    spaceHuman.jupiter();
    expect(spaceHuman.inputAge).toEqual(1);
    expect(spaceHuman.lifeExpectancy).toEqual(8);
  });

  test('should return how many years a user has left on mercury if age is under life expectancy', () => {
    spaceHuman.mercury();
    expect(spaceHuman.years()).toEqual(333);
  });
  
  test('should return how many years a user has left on venus if age is under life expectancy', () => {
    spaceHuman.venus();
    expect(spaceHuman.years()).toEqual(129);
  });

  test('should return how many years a user has left on mars if age is under life expectancy', () => {
    spaceHuman.mars();
    expect(spaceHuman.years()).toEqual(43);
  });

  test('should return how many years a user has left on jupiter if age is under life expectancy', () => {
    spaceHuman.jupiter();
    expect(spaceHuman.years()).toEqual(7);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on mercury', () => {
    oldSpaceHuman.mercury();
    expect(oldSpaceHuman.years()).toEqual(84);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on venus', () => {
    oldSpaceHuman.venus();
    expect(oldSpaceHuman.years()).toEqual(32);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on mars', () => {
    oldSpaceHuman.mars();
    expect(oldSpaceHuman.years()).toEqual(10);
  });

  test('if user age is greater than life expectancy, it should return how many years a user has surpassed their life expectancy on jupiter', () => {
    oldSpaceHuman.jupiter();
    expect(oldSpaceHuman.years()).toEqual(2);
  });
});