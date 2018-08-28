import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import DefaultText from './defaulttext';

const FightInfo = () => (
  <View style={style.fightInfo}>
    <DefaultText>Some information about the bossfight</DefaultText>
  </View>
);
export default FightInfo;
