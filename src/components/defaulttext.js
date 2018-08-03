import React from 'react';
import { Text } from 'react-native';
import style from '../config/style';

export default class DefaultText extends React.Component{
  render(){
    return(
      <Text style={style.defaultText}>{this.props.children}</Text>
    );
  }
};
