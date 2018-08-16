import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import style from '../config/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SpellListEntry extends React.Component{
  render(){

    let selectedStyle = {};
    if(this.props.selected){
      selectedStyle = { backgroundColor: '#66a3ff' };
    }

    return(
      <TouchableOpacity onPress={this.props.spellToModal}>
        <View style={[style.spellListEntry, selectedStyle]}>
          <Image
            style={{height: 50, width: 50, resizeMode: 'stretch', margin: 5}}
            source={{uri: 'http://via.placeholder.com/50/111111'}}
          />
          <Text>{this.props.name}</Text>
          <TouchableOpacity onPress={this.props.openInfo}>
            <FontAwesome name={'info'} size={50} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );

    /*return(
      <TouchableOpacity style={[style.SpellListEntry, selectedStyle]} onPress={() => this.props.spellToModal()}>
          <View style={style.spellInfo}>
            <Text style={style.spellName}>{this.props.name}</Text>
            <View style={style.spellInfoDetails}>
              <Text>Mana cost: {this.props.manaCost}</Text>
              <Text>, Casttime: {this.props.casttime}</Text>
            </View>
          </View>
      </TouchableOpacity>
    );*/
  }
};
