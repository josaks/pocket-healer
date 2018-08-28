import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import style from '../config/style';

const FightBtn = ({ onpress, name }) => (
  <TouchableOpacity style={style.fight} onPress={onpress}>
    <Text style={style.fightText}>{name}</Text>
  </TouchableOpacity>
);
FightBtn.propTypes = {
  onpress: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FightBtn;
