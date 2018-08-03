import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from '../config/style';


export default class SpellBtn extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={this.props.onpress} style={style.spellBtn}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
};
