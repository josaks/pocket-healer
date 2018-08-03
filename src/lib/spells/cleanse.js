export default function Cleanse(manaCost, casttime, healAmount){
  this.manaCost = manaCost;
  this.casttime = casttime;
  this.healAmount = healAmount;
  this.name = 'Cleanse';

  this.cast = (raiders, i) => {
    //input checking
    if(i > raiders.length - 1) throw new Error('Index > array length - 1');
    if(i < 0) throw new Error('Index < 0');

    //remove latest applied effect
    raiders[i].effects.pop();

    return raiders;
  };

  this.cast = this.cast.bind(this);
}
