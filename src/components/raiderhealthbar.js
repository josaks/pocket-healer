import React from 'react';
import PropTypes from 'prop-types';
import style from '../config/style';
import ResourceBar from './resourcebar';

const RaiderHealthbar = ({ fillPercent }) => (
  <ResourceBar
    fillPercent={fillPercent}
    fillColor={style.raiderHealthbarColor}
    frameStyle={style.raiderHealthbar}
  />
);
RaiderHealthbar.propTypes = {
  fillPercent: PropTypes.number.isRequired,
};

export default RaiderHealthbar;
