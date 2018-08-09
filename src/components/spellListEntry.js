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
      <TouchableOpacity style={[selectedStyle]} onPress={() => this.props.spellToModal()}>
        <View style={style.spellImage}>
          {/*image*/}
        </View>
        <View style={style.spellInfo}>
          <Text style={style.spellName}>{this.props.name}</Text>
          <View style={style.spellInfoDetails}>
            <Text>Mana cost: {this.props.manaCost}</Text>
            <Text>, Casttime: {this.props.casttime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};
