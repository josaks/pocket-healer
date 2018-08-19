import { raiderMaxHealth, chainHealJumps } from '../../config/settings';
import { findLowestHp } from '../helpermethods';

export default function ChainHeal(manaCost, casttime, healAmount){
  this.manaCost = manaCost;
  this.casttime = casttime;
  this.healAmount = healAmount;
  this.name = 'Chain heal';
  this.selected = false;

  this.cast = (raiders, i) => {
    //input checking
    if(i > raiders.length - 1) throw new Error('Index > array length - 1');
    if(i < 0) throw new Error('Index < 0');

    //apply heal
    raiders[i].hp = (raiders[i].hp + this.healAmount > raiderMaxHealth) ? raiderMaxHealth : raiders[i].hp + this.healAmount;
    //heal jumps 1st time to lowest hp target
    let firstJumpTarget = findLowestHp(raiders);
    firstJumpTarget.hp = (firstJumpTarget.hp + this.healAmount > raiderMaxHealth) ? raiderMaxHealth : firstJumpTarget.hp + this.healAmount;
    //heal jumps 2nd time, again to lowest health target
    let secondJumpTarget = findLowestHp(raiders);
    secondJumpTarget.hp = (secondJumpTarget.hp + this.healAmount > raiderMaxHealth) ? raiderMaxHealth : secondJumpTarget.hp + this.healAmount;

    return raiders;
  };

  this.cast = this.cast.bind(this);
}
