import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import style from '../config/style';

const DefaultText = ({ children }) => (
  <Text style={style.defaultText}>{children}</Text>
);
DefaultText.propTypes = {
  children: PropTypes.isRequired,
};
export default DefaultText;
