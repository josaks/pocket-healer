import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import style from '../config/style';
const { width } = Dimensions.get('window');

export default class Manabar extends React.Component {
  render(){
    return(
      <View style={style.manabarFrame}>
        <View style={[style.manabarFill, {width: width * (this.props.mana / 1000)}]}>
        </View>
      </View>
    );
  }
};
