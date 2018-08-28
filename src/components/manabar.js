import React from 'react';
import PropTypes from 'prop-types';
import style from '../config/style';
import ResourceBar from './resourcebar';

const Manabar = ({ fillPercent }) => (
  <ResourceBar
    fillPercent={fillPercent}
    fillColor={style.manabarColor}
    frameStyle={style.manabar}
  />
);
Manabar.propTypes = {
  fillPercent: PropTypes.number.isRequired,
};

export default Manabar;
