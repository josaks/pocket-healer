import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../config/style';

const AcceptBtn = ({ onpress }) => (
  <TouchableOpacity onPress={onpress} style={[style.fightInfoBtn, style.acceptBtn]}>
    <FontAwesome name="check" size={35} />
  </TouchableOpacity>
);
AcceptBtn.propTypes = {
  onpress: PropTypes.func.isRequired,
};

export default AcceptBtn;
