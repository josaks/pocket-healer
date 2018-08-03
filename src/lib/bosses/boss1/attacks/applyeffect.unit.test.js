import ApplyEffect from './applyeffect';
import Dot from '../../../effects/dot';
import { JSONDeepCopy } from '../../../helpermethods';

describe('the applied effects', () => {
  let raiders = [{ effects: [] }];
  let index = 0;
  let dmg = 100;
  let effectOne = new Dot(dmg);
  let effectTwo = new Dot(dmg);
  let expected = [{ effects: [effectOne, effectTwo] }];

  effectOne = new Dot(dmg);
  effectTwo = new Dot(dmg);
  let raidersWithEffectApplied = ApplyEffect(raiders, index, effectOne);
  raidersWithEffectApplied = ApplyEffect(raiders, index, effectTwo);

  console.log(JSON.stringify(raidersWithEffectApplied[index].effects[0]));
  test('have the expected properties', () => {
    expect(JSON.stringify(raidersWithEffectApplied[index].effects[0]))
      .toEqual(JSON.stringify(expected[index].effects[0]));
    expect(JSON.stringify(raidersWithEffectApplied[index].effects[1]))
      .toEqual(JSON.stringify(expected[index].effects[1]));
  });
});
