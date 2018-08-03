import { deepClone } from './helpermethods';

describe('deepClone()', () => {
  let obj = {hp: 100, alive: true, effects: [{dmg:100, f:1}, {dmg:100, f:2}]};
  test('returns an object that is equal to its input', () => {
    expect(obj).toEqual(deepClone(obj));
  });
  test('returns a new object', () => {
    expect(obj).not.toBe(deepClone(obj));
  });
});
