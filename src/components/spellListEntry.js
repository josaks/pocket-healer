import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../config/style';

export default class SpellListEntry extends React.Component{
  render(){
    return(
      <View style={style.spellListEntry}>
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
        <View style={style.spellButtons}>
          <TouchableOpacity onPress={() => this.props.selectSpell(0)} style={style.spellBtn}>
            <Text>Spell 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.selectSpell(1)} style={style.spellBtn}>
            <Text>Spell 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};
