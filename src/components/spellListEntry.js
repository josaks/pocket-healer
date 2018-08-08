import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../config/style';

export default class SpellListEntry extends React.Component{
  render(){

    let selectedStyle = {};
    if(this.props.selected){
      selectedStyle = { backgroundColor: '#66a3ff' };
    }

    return(
      <TouchableOpacity style={[style.spellListEntry, selectedStyle]} onPress={() => this.props.spellToBeSelected(this.props.spell)}>
        <View style={style.spellImage}>
          {/*image*/}
        </View>
        <View style={style.spellInfo}>
          <Text style={style.spellName}>{this.props.spell.name}</Text>
          <View style={style.spellInfoDetails}>
            <Text>Mana cost: {this.props.spell.manaCost}</Text>
            <Text>, Casttime: {this.props.spell.casttime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};
