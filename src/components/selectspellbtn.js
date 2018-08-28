import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

const SelectSpellBtn = ({ onpress, text }) => (
  <TouchableOpacity onPress={onpress}>
    <Text>{ text }</Text>
  </TouchableOpacity>
);
SelectSpellBtn.propTypes = {
  onpress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default SelectSpellBtn;
