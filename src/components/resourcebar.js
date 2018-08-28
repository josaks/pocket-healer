import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from '../config/style';

const ResourceBar = ({ fillPercent, frameStyle, fillColor }) => {
  const widthString = fillPercent.toString() + '%';

  return (
    <View style={[style.barFrame, frameStyle]}>
      <View style={[style.barFill, fillColor, { width: widthString }]} />
    </View>
  );
};
ResourceBar.propTypes = {
  fillPercent: PropTypes.number.isRequired,
  frameStyle: PropTypes.isRequired,
  fillColor: PropTypes.isRequired,
};

export default ResourceBar;
