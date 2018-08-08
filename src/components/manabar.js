import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import style from '../config/style';
const { width } = Dimensions.get('window');
import { maxMana } from '../config/settings';

export default class Manabar extends React.Component {
  render(){
    return(
      <View style={style.manabarFrame}>
        <View style={[style.manabarFill, {width: width * (this.props.mana / maxMana)}]}>
        </View>
      </View>
    );
  }
};
