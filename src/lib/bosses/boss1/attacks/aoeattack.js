export default (raiders, i, basedmg) => {
  // input checking
  if (i > raiders.length - 1) throw new Error('Index > array length - 1');
  if (i < 0) throw new Error('Index < 0');
  raiders.forEach((raider, index) => {
    if (raider.hp < 0) throw new Error(`raider with index: ${index} has hp < 0`);
  });
  if (basedmg < 0) throw new Error('dmg < 0');

  // change hp for each raider since aoe attack
  raiders.forEach((raider, index) => {
    // distance between targeted raider(i) and current raider(index)
    // greater distance ==> less damage
    const distance = Math.abs(i - index);
    const coeff = 1 / (distance + 1);
    const dmg = Math.floor(basedmg * coeff);

    // actually change hp
    raider.hp = raider.hp < dmg ? 0 : raider.hp - dmg;
  });

  // return modified array
  return raiders;
};
