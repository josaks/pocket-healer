import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from '../config/style';


export default class SelectSpellBtn extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={this.props.onpress}}>
        <Text>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
};
