import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../config/style';

const FightBtn = ({ onpress, name }) => (
  <TouchableOpacity style={style.fight} onPress={onpress}>
    <Text style={style.fightText}>{name}</Text>
    <MaterialIcons name="sword-cross" size={30} />
  </TouchableOpacity>
);

export default FightBtn;
