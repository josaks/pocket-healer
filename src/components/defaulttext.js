import React from 'react';
import { Text } from 'react-native';
import style from '../config/style';

const DefaultText = ({ children }) => (
  <Text style={style.defaultText}>{children}</Text>
);
export default DefaultText;
