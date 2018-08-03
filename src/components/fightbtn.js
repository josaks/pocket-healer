import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from '../config/style';


export default class FightBtn extends React.Component{
  render(){
    return(
      <TouchableOpacity style={style.fight} onPress={this.props.onpress}>
        <Text style={style.fightText}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
};
