import React from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import style from '../config/style';
import RejectBtn from '../components/rejectbtn';
import AcceptBtn from '../components/acceptbtn';
import SpellListEntry from '../components/spellListEntry';
import SpellInfoModal from '../components/spellinfomodal';
import SpellFactory from '../lib/spells/spellfactory';
import { deepClone } from '../lib/helpermethods';

export default class SpellScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      infoModalVisible: false,
      selectedSpells: [],
      selectableSpells: [
        SpellFactory.Spell('healingtouch'),
        SpellFactory.Spell('cleanse'),
        SpellFactory.Spell('chainheal')
      ],
    };
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
    if(this.state.selectedSpells[0] !== null && this.state.selectedSpells[1] !== null){
      this.props.navigation.navigate('Encounter', {
        boss: this.props.navigation.getParam('boss'),
        spells: {spellOne: this.state.selectedSpells[0], spellTwo: this.state.selectedSpells[1]},
      });
    }
  }

  selectSpell = (spell) => {
    if(!spell.selected){
      const selectedSpellsFull = this.state.selectedSpells.length >= 2;
      let selectableSpells = [...this.state.selectableSpells];
      selectableSpells.forEach((s) => {
        //select new spell
        if(s === spell) s.selected = true;
        //deselect spell that is being replaced if selected spells array is full
        if(selectedSpellsFull && s === this.state.selectedSpells[0]) s.selected = false;
      });
      console.log(selectableSpells);
      //make new selected spell array(immutability)
      let selectedSpells = [...this.state.selectedSpells];
      selectedSpells.push(spell);
      if(selectedSpellsFull) selectedSpells.shift();
      console.log(selectedSpells);
      //update state
      this.setState({
        selectedSpells: selectedSpells,
        selectableSpells: selectableSpells,
      });
    }
  }

  render() {
    return (
      <View style={style.spellScreen}>
        <View style={style.spellContentContainer}>
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
                      selectSpell={() => this.selectSpell(item)}
                      openInfo={() => this.openInfo(item)}
                      selected={item.selected}
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


// import React from 'react';
// import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
// import style from '../config/style';
// import RejectBtn from '../components/rejectbtn';
// import AcceptBtn from '../components/acceptbtn';
// import SpellListEntry from '../components/spellListEntry';
// import SpellSelectModal from '../components/spellselectmodal';
// import SpellInfoModal from '../components/spellinfomodal';
// import SpellFactory from '../lib/spells/spellfactory';
//
// export default class SpellScreen extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       selectedSpells: [null, null],
//       choiceModalVisible: false,
//       infoModalVisible: false,
//       selectableSpells: [
//         SpellFactory.Spell('healingtouch'),
//         SpellFactory.Spell('cleanse'),
//         SpellFactory.Spell('chainheal')
//       ],
//     };
//   }
//
//   spellToModal = (spell) => {
//     if(!this.isSelected(spell)){
//       this.spellToBeSelected = spell;
//       this.setChoiceModalVisibility(true);
//     }
//   }
//
//   isSelected(spell) {
//     return this.state.selectedSpells.includes(spell);
//   }
//
//   setChoiceModalVisibility(visibility){
//     this.setState({
//       choiceModalVisible: visibility,
//     });
//   }
//
//   openInfo(spell){
//     this.spellToBeShownInfoAbout = spell;
//     this.setInfoModalVisibility(true);
//   }
//
//   setInfoModalVisibility(visibility){
//     this.setState({
//       infoModalVisible: visibility,
//     });
//   }
//
//   goBack(){
//     this.props.navigation.goBack();
//   }
//
//   showEncounter(){
//     if(this.state.selectedSpells[0] !== null && this.state.selectedSpells[1] !== null){
//       this.props.navigation.navigate('Encounter', {
//         boss: this.props.navigation.getParam('boss'),
//         spells: {spellOne: this.state.selectedSpells[0], spellTwo: this.state.selectedSpells[1]},
//       });
//     }
//   }
//
//   selectSpell = (spell, i) => {
//     //deselect spell that is being replaced
//     if(!this.state.selectedSpells[i] === null) this.state.selectedSpells[i].selected = false;
//     //make new selected spell array(immutability)
//     let selectedSpells = [...this.state.selectedSpells];
//     selectedSpells[i].selected = true;
//     //make new selectable spell array(immutability)
//     let selectableSpells = [...this.state.selectableSpells];
//     for(let p = 0; p < selectableSpells.length; p++){
//       if(selectableSpells[p] === spell){
//         selectableSpells[p].selected = true;
//       }
//     }
//     //update state
//     this.setState({
//       selectedSpells: selectedSpells,
//       selectableSpells: selectableSpells,
//     });
//     //hide choice modal
//     this.setChoiceModalVisibility(false);
//
//     console.log(this.state.selectedSpells);
//   }
//
//   render() {
//     return (
//       <View style={style.spellScreen}>
//         <View style={style.spellContentContainer}>
//           <SpellSelectModal
//             visible={this.state.choiceModalVisible}
//             hide={() => this.setChoiceModalVisibility(false)}
//             selectSpell={(i) => this.selectSpell(this.spellToBeSelected, i)}
//           />
//
//           {/*If this.spellToBeShownInfoAbout is null, dont show info modal*/}
//           {!!this.spellToBeShownInfoAbout &&
//             <SpellInfoModal
//               visible={this.state.infoModalVisible}
//               hide={() => this.setInfoModalVisibility(false)}
//               spell={this.spellToBeShownInfoAbout}
//             />
//           }
//
//           <View style={style.spellList}>
//             <FlatList
//               data={this.state.selectableSpells}
//               keyExtractor={(item) => item.name}
//               renderItem={({item}) => {
//                   return (
//                     <SpellListEntry
//                       name={item.name}
//                       spellToModal={() => this.spellToModal(item)}
//                       openInfo={() => this.openInfo(item)}
//                       selected={item.selected}
//                     />
//                   )
//                 }
//               }
//             />
//           </View>
//         </View>
//
//         <View style={style.spellSelectButtonsContainer}>
//           <RejectBtn onpress={() => this.goBack()}/>
//           <AcceptBtn onpress={() => this.showEncounter()}/>
//         </View>
//       </View>
//     );
//   }
// };
