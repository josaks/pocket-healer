export default (raiders, i, effect) => {
  //input checking
  if(i > raiders.length - 1) throw new Error('Index > array length - 1');
  if(i < 0) throw new Error('Index < 0');
  raiders.forEach((raider, index) => {
    if(raider.hp < 0) throw new Error('raider with index: ' + index + ' has hp < 0');
  });

  //apply dot
  raiders[i].effects.push(effect);

  //return modified array
  return raiders;
};
