import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import style from '../config/style';

const SpellBtn = ({ onpress, text }) => (
  <TouchableOpacity onPress={onpress} style={style.spellBtn}>
    <Text>{text}</Text>
  </TouchableOpacity>
);
SpellBtn.propTypes = {
  onpress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SpellBtn;
