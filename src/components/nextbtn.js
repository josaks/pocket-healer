import React from 'react';
import { Button, Text, Icon } from 'native-base';
import style from '../config/style';

const NextBtn = ({ onPress }) => (
  <Button
    style={style.navButton}
    iconRight
    light
    onPress={onPress}
  >
    <Text>Next</Text>
    <Icon name="arrow-forward" />
  </Button>
);

export default NextBtn;
