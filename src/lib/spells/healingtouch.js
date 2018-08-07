import raiderMaxHealth from '../../config/settings';

export default function HealingTouch(manaCost, casttime, healAmount){
  this.manaCost = manaCost;
  this.casttime = casttime;
  this.healAmount = healAmount;
  this.name = 'Healing Touch';

  this.cast = (raiders, i) => {
    //input checking
    if(i > raiders.length - 1) throw new Error('Index > array length - 1');
    if(i < 0) throw new Error('Index < 0');

    //apply heal
    raiders[i].hp = (raiders[i].hp + this.healAmount > raiderMaxHealth) ? raiderMaxHealth : raiders[i].hp + this.healAmount;

    return raiders;
  };

  this.cast = this.cast.bind(this);
}
