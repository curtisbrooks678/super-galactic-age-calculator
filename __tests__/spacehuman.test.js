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

  test('should return age from earth years to mercury years, rounding to two decimal places', () => {
    expect(spacehuman.mercury()).toEqual(83.33);
  });
});