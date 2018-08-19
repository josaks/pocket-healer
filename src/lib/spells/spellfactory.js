import ChainHeal from './chainheal';
import Cleanse from './cleanse';
import HealingTouch from './healingtouch';

export default {
  Spell(spell){
    return this.spells[spell];
  },

  spells: {
    healingtouch: new HealingTouch(10, 2000, 400),
    cleanse: new Cleanse(20, 0, 'N/A'),
    chainheal: new ChainHeal(20, 2000, 400),
  }
}
