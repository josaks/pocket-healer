import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import DefaultText from './defaulttext';

export default class FightInfo extends React.Component{
  render(){
    return(
      <View style={style.fightInfo}>
        <DefaultText>Some information about the bossfight</DefaultText>
      </View>
    );
  }
};
