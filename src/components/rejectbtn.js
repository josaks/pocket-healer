import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../config/style';

const RejectBtn = ({ onpress }) => (
  <TouchableOpacity onPress={onpress} style={[style.fightInfoBtn, style.rejectBtn]}>
    <FontAwesome name="times" size={35} />
  </TouchableOpacity>
);
RejectBtn.propTypes = {
  onpress: PropTypes.func.isRequired,
};

export default RejectBtn;
