import React from 'react';
import PropTypes from 'prop-types';
import style from '../config/style';
import ResourceBar from './resourcebar';

const BossHealthbar = ({ fillPercent }) => (
  <ResourceBar
    fillPercent={fillPercent}
    fillColor={style.bossHealthbarColor}
    frameStyle={style.bossHealthbar}
  />
);
BossHealthbar.propTypes = {
  fillPercent: PropTypes.number.isRequired,
};

export default BossHealthbar;
