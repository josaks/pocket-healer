import ChainHeal from './chainheal';
import { raiderMaxHealth } from '../../config/settings';

describe('Chainheal', () => {
  let raiders = [{hp: 600}, {hp: 500}, {hp: 550}, {hp: 560}];
  let healAmount = 600;
  let i = 0;
  let ht = new ChainHeal(10, 2000, healAmount);
  raiders = ht.cast(raiders, i);

  let expected = [{hp: raiderMaxHealth}, {hp: raiderMaxHealth}, {hp: raiderMaxHealth}, {hp: 150}];

  test('heals main target and does not overheal it', () => {
    expect(raiders[0].hp).toBe(expected[0].hp);
  });
  test('heals first jump target and does not overheal it', () => {
    expect(raiders[1].hp).toBe(expected[1].hp);
  });
  test('heals second jump target and does not overheal it', () => {
    expect(raiders[2].hp).toBe(expected[2].hp);
  });
})
