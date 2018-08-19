export default function Dot(dmgPerTick) {
  if(dmgPerTick < 0) throw new Error('dmgPerTick < 0');
  this.dmgPerTick = dmgPerTick;
  this.image = 'http://via.placeholder.com/50/111111';

  this.use = (raider) => {
    raider.hp = raider.hp < this.dmgPerTick ? 0 : raider.hp - this.dmgPerTick;
  }

  this.use = this.use.bind(this);
};


//for auras
// this.onApplication = (raider) => {
//   //unimplemented
// }

//for auras
// this.onRemoval = (raider) => {
//   //unimplemented
// }
