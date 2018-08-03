import Dot from './dot';

test('Damage higher than remaining hp test', () => {
  let raider = {hp: 100};
  let dmg = 200;
  let expected = {hp: 0};

  let dot = new Dot(dmg);
  dot.use(raider);
  expect(raider).toEqual(expected);
});

test('Use test', () => {
  let raider = {hp: 1000};
  let dmg = 200;
  let expected = {hp: 800};

  let dot = new Dot(dmg);
  dot.use(raider);
  expect(raider).toEqual(expected);
});
