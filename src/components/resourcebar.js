import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import FillView from './fillview';

const ResourceBar = ({ fillPercent, frameStyle, fillColor }) => (
  <View style={[style.barFrame, frameStyle]}>
    <FillView fillColor={fillColor} fillPercent={fillPercent} />
  </View>
);

export default ResourceBar;
