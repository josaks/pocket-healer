import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import style from '../config/style';
import RejectBtn from '../components/rejectbtn';
import AcceptBtn from '../components/acceptbtn';
import SpellListEntry from '../components/spellListEntry';
import HealingTouch from '../lib/spells/healingtouch';
import Cleanse from '../lib/spells/cleanse';
import ChainHeal from '../lib/spells/chainheal';
import SpellSelectModal from '../components/spellselectmodal';
import SpellInfoModal from '../components/spellinfomodal';

export default class SpellScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spells: [null, null],
      choiceModalVisible: false,
      infoModalVisible: false,
      /*
      instantiate spells
      TODO: switch to factory
      */
      selectableSpells: [
        new HealingTouch(10, 2000, 400),
        new Cleanse(20, 0, 'N/A'),
        new ChainHeal(20, 2000, 400),
      ],
    };

  }

  spellToModal = (spell) => {
    if(!this.isSelected(spell)){
      this.spellToBeSelected = spell;
      this.setChoiceModalVisibility(true);
    }
  }

  isSelected(spell) {
    return this.state.spells.includes(spell);
  }

  setChoiceModalVisibility(visibility){
    this.setState({
      choiceModalVisible: visibility,
    });
  }

  openInfo(spell){
    this.spellToBeShownInfoAbout = spell;
    this.setInfoModalVisibility(true);
  }

  setInfoModalVisibility(visibility){
    this.setState({
      infoModalVisible: visibility,
    });
  }

  goBack(){
    this.props.navigation.goBack();
  }

  showEncounter(){
    if(this.state.spells[0] !== null && this.state.spells[1] !== null){
      this.props.navigation.navigate('Encounter', {
        boss: this.props.navigation.getParam('boss'),
        spells: {spellOne: this.state.spells[0], spellTwo: this.state.spells[1]},
      });
    }
  }

  selectSpell = (spell, i) => {
    let spells = [...this.state.spells];
    spells[i] = spell;
    this.setState({
      spells: spells,
    });
    this.setChoiceModalVisibility(false);
  }

  render() {
    return (
      <View style={style.spellScreen}>
        <View style={style.spellContentContainer}>
          <SpellSelectModal
            visible={this.state.choiceModalVisible}
            hide={() => this.setChoiceModalVisibility(false)}
            selectSpell={(i) => this.selectSpell(this.spellToBeSelected, i)}
          />

          {/*If this.spellToBeShownInfoAbout is null, dont show info modal*/}
          {!!this.spellToBeShownInfoAbout &&
            <SpellInfoModal
              visible={this.state.infoModalVisible}
              hide={() => this.setInfoModalVisibility(false)}
              spell={this.spellToBeShownInfoAbout}
            />
          }

          <View style={style.spellList}>
            <FlatList
              data={this.state.selectableSpells}
              keyExtractor={(item) => item.name}
              renderItem={({item}) => {
                  return (
                    <SpellListEntry
                      name={item.name}
                      spellToModal={() => this.spellToModal(item)}
                      openInfo={() => this.openInfo(item)}
                      selected={this.isSelected(item)}
                    />
                  )
                }
              }
            />
          </View>
        </View>

        <View style={style.spellSelectButtonsContainer}>
          <RejectBtn onpress={() => this.goBack()}/>
          <AcceptBtn onpress={() => this.showEncounter()}/>
        </View>
      </View>
    );
  }
};
