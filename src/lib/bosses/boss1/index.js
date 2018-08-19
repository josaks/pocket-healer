import SingleTargetAttack from './attacks/singletargetattack';
import AoeAttack from './attacks/aoeattack';
import ApplyEffect from './attacks/applyeffect';
import Dot from '../../effects/dot';

//logic for boss 1
//roll is expected to be a random int in the interval [0, 99]
export default (raiders, roll) => {
  // index in raider array that will be target of boss ability
  // randomly chosen
  let i = Math.floor(Math.random() * raiders.length);
  //base damage of boss ability
  let basedmg = null;
  //effect applied by boss
  let effect = null;

  //decide which boss ability to use
  switch(true){
    case (roll < 0):
      basedmg = 300;
      return SingleTargetAttack(raiders, i, basedmg);
    case (roll < 0):
      basedmg = 400;
      return AoeAttack(raiders, i, basedmg);
    case (roll < 90):
      basedmg = 100;
      effect = new Dot(basedmg);
    return ApplyEffect(raiders, i, effect);
    default:
      return raiders;
  }
};
