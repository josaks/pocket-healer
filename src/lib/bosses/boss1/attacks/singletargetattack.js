export default (raiders, i, dmg) => {
  //input checking
  if(i > raiders.length - 1) throw new Error('Index > array length - 1');
  if(i < 0) throw new Error('Index < 0');
  raiders.forEach((raider, index) => {
    if(raider.hp < 0) throw new Error('raider with index: ' + index + ' has hp < 0');
  });
  if(dmg < 0) throw new Error('dmg < 0');

  //change hp
  raiders[i].hp = raiders[i].hp < dmg ? 0 : raiders[i].hp - dmg;

  //return modified array
  return raiders;
};
