import Cleanse from './cleanse';

describe('cleanse', () => {
  let raiders = [{ effects: [{a: 1}, {b: 2}] }];
  let healAmount = 0;
  let i = 0;
  let expected = [{ effects: [{a: 1}] }];
  let c = new Cleanse(20, 0, healAmount);
  
  test('removes most recently applied effect', () => {
    expect(c.cast(raiders, i)).toEqual(expected);
  });
})
