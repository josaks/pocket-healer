import AoeAttack from './aoeattack';

test('Damage higher than remaining hp test', () => {
  let raiders = [{hp: 1000}];
  let index = 0;
  let dmg = 2000;
  let expected = [{hp: 0}];

  expect(AoeAttack(raiders, index, dmg)).toEqual(expected);
});

test('Damage spread test', () => {
  let raiders = [{hp: 1000}, {hp: 1000}, {hp: 1000}, {hp: 1000}, {hp: 1000}];
  let index = 2;
  let dmg = 500;
  let expected = [{hp: 834}, {hp: 750}, {hp: 500}, {hp: 750}, {hp: 834}];

  expect(AoeAttack(raiders, index, dmg)).toEqual(expected);
});
