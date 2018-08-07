import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import RejectBtn from '../components/rejectbtn';
import AcceptBtn from '../components/acceptbtn';
import SpellList from '../components/spellList';
import SpellListEntry from '../components/spellListEntry';
import HealingTouch from '../lib/spells/healingtouch';
import Cleanse from '../lib/spells/cleanse';
import ChainHeal from '../lib/spells/chainheal';

export default class SpellScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spells: [null, null],
    };
  }

  goBack(){
    this.props.navigation.goBack();
  }

  showEncounter(){
    this.props.navigation.navigate('Encounter', {
      boss: this.props.navigation.getParam('boss'),
      spells: {spellOne: this.state.spells[0], spellTwo: this.state.spells[1]},
    });
  }

  selectSpell(spell, i){
    if(!this.state.spells.includes(spell)){
      let spells = [...this.state.spells];
      spells[i] = spell;
      this.setState({
        spells: spells,
      });
    }
  }

  render() {
    const ht = new HealingTouch(10, 2000, 400);
    const cleanse = new Cleanse(20, 0, 'N/A');
    const ch = new ChainHeal(20, 2000, 400);

    return (
      <View style={style.spellScreen}>
        <SpellList>
          <SpellListEntry
            spell={ht}
            selectSpell={(i) => this.selectSpell(ht, i)}
          />
          <SpellListEntry
            spell={cleanse}
            selectSpell={(i) => this.selectSpell(cleanse, i)}
          />
          <SpellListEntry
            spell={ch}
            selectSpell={(i) => this.selectSpell(ch, i)}
          />
          <SpellListEntry
            spell={ht}
            selectSpell={(i) => this.selectSpell(ht, i)}
          />
          <SpellListEntry
            spell={ht}
            selectSpell={(i) => this.selectSpell(ht, i)}
          />
        </SpellList>

        <View style={style.fightInfoButtonsContainer}>
          <RejectBtn onpress={() => this.goBack()}/>
          <AcceptBtn onpress={() => this.showEncounter()}/>
        </View>
      </View>
    );
  }
};
