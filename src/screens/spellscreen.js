import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import style from '../config/style';
import RejectBtn from '../components/rejectbtn';
import AcceptBtn from '../components/acceptbtn';
import SpellListEntry from '../components/spellListEntry';
import HealingTouch from '../lib/spells/healingtouch';
import Cleanse from '../lib/spells/cleanse';
import ChainHeal from '../lib/spells/chainheal';
import SpellSelectModal from '../components/spellselectmodal';

//instantiate spells
/*
TODO: switch to factory
*/
const ht = new HealingTouch(10, 2000, 400);
const cleanse = new Cleanse(20, 0, 'N/A');
const ch = new ChainHeal(20, 2000, 400);

export default class SpellScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spells: [null, null],
      modalVisible: false,
    };
  }

  spellToModal(spell){
    if(!this.selected(spell)){
      this.spellToBeSelected = spell;
      this.setModalVisible(true);
    }
  }

  selected = (spell) => {
    return this.state.spells.includes(spell);
  }

  setModalVisible(isVisible){
    this.setState({
      modalVisible: isVisible,
    });
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

  selectSpell = (spell, i) => {
    let spells = [...this.state.spells];
    spells[i] = spell;
    this.setState({
      spells: spells,
    });
    this.setModalVisible(false);
  }

  render() {
    return (
      <View style={style.spellScreen}>
        <View style={style.spellContentContainer}>
          <SpellSelectModal
            visibility={this.state.modalVisible}
            setVisibility={(isVisible) => this.setModalVisible(isVisible)}
            spellToBeSelected={this.spellToBeSelected}
            selectSpell={this.selectSpell}
            setModalVisible={(isVisible) => this.setModalVisible(isVisible)}
          />
          <ScrollView contentContainerStyle={style.spellList}>
            <SpellListEntry
              spell={ht}
              spellToBeSelected={(spell) => this.spellToModal(spell)}
              selected={this.selected(ht)}
            />
            <SpellListEntry
              spell={cleanse}
              spellToBeSelected={(spell) => this.spellToModal(spell)}
              selected={this.selected(cleanse)}
            />
            <SpellListEntry
              spell={ch}
              spellToBeSelected={(spell) => this.spellToModal(spell)}
              selected={this.selected(ch)}
            />
          </ScrollView>
        </View>

        <View style={style.spellSelectButtonsContainer}>
          <RejectBtn onpress={() => this.goBack()}/>
          <AcceptBtn onpress={() => this.showEncounter()}/>
        </View>
      </View>
    );
  }
};
