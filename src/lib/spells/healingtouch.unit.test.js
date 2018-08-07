import HealingTouch from './healingtouch';
import { raiderMaxHealth } from '../../config/settings';

test('overheal test', () => {
  let raiders = [{hp: 900}];
  let healAmount = 500;
  let i = 0;
  let expected = [{hp: raiderMaxHealth}];
  let ht = new HealingTouch(10, 2000, healAmount);
  expect(ht.cast(raiders, i)).toEqual(expected);
});
