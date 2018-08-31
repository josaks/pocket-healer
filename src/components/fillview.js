import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from '../config/style';

const FillView = ({ fillPercent, fillColor }) => {
  const widthString = fillPercent.toString() + '%';
  return (
    <View style={[style.barFill, fillColor, { width: widthString }]} />
  );
};
FillView.propTypes = {
  fillPercent: PropTypes.number,
};
FillView.defaultProps = {
  fillPercent: 0,
};

export default FillView;
