import SpaceHuman from '../src/spacehuman.js';

describe('Triangle', () => {

  test('should correctly create a spacehuman object with age and life expectancy properties', () => {
    const spacehuman = new SpaceHuman(20, 100);
    expect(spacehuman.inputAge).toEqual(20);
    expect(spacehuman.lifeExpectancy).toEqual(100);
  });
});