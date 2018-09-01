import React from 'react';
import { View } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import style from '../config/style';

const BackBtn = ({ onPress }) => (
  <Button
    style={style.navButton}
    iconLeft
    light
    onPress={onPress}
  >
    <Icon name="arrow-back" />
    <Text>Back</Text>
  </Button>
);

export default BackBtn;
