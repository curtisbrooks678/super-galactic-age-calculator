import SpaceHuman from '../src/spacehuman.js';

describe('SpaceHuman', () => {
  let spacehuman;

  beforeEach(() => {
    spacehuman = new SpaceHuman(20, 100);
  });

  test('should correctly create a spacehuman object with age and life expectancy properties', () => {
    expect(spacehuman.inputAge).toEqual(20);
    expect(spacehuman.lifeExpectancy).toEqual(100);
  });

  test('should return age and life expectancy from earth years to mercury years, rounding down', () => {
    spacehuman.mercury();
    expect(spacehuman.inputAge).toEqual(83);
    expect(spacehuman.lifeExpectancy).toEqual(416);
  });

  test('should return age and life expectancy from earth years to venus years, rounding down', () => {
    spacehuman.venus();
    expect(spacehuman.inputAge).toEqual(32);
    expect(spacehuman.lifeExpectancy).toEqual(161);
  });

  test('should return age and life expectancy from earth years to mars years, rounding down', () => {
    spacehuman.mars();
    expect(spacehuman.inputAge).toEqual(10);
    expect(spacehuman.lifeExpectancy).toEqual(53);
  });

  test('should return age and life expectancy from earth years to jupiter years, rounding down', () => {
    spacehuman.jupiter();
    expect(spacehuman.inputAge).toEqual(1);
    expect(spacehuman.lifeExpectancy).toEqual(8);
  });

  test('should return how many years a user has left on mercury if age is under life expectancy', () => {
    spacehuman.mercury();
    expect(spacehuman.yearsLeft()).toEqual(333);
  });
  
  test('should return how many years a user has left on venus if age is under life expectancy', () => {
    spacehuman.venus();
    expect(spacehuman.yearsLeft()).toEqual(129);
  });

  test('should return how many years a user has left on mars if age is under life expectancy', () => {
    spacehuman.mars();
    expect(spacehuman.yearsLeft()).toEqual(43);
  });

  test('should return how many years a user has left on jupiter if age is under life expectancy', () => {
    spacehuman.jupiter();
    expect(spacehuman.yearsLeft()).toEqual(7);
  });

  
});