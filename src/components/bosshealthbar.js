import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import style from '../config/style';
const { width } = Dimensions.get('window');

export default class BossHealthbar extends React.Component{
  render(){
    return(
      <View style={style.bossHealthbarFrame}>
        <View style={[style.bossHealthbarFill, {width: width * (this.props.hp / 1000)}]}>
          <Text>Boss health bar</Text>
        </View>
      </View>
    );
  }
};
