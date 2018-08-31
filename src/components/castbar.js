import React from 'react';
import PropTypes from 'prop-types';
import style from '../config/style';
import ResourceBar from './resourcebar';

const Castbar = ({ castCompletion }) => (
  <ResourceBar
    fillPercent={castCompletion}
    fillColor={style.castBarColor}
    frameStyle={style.castBar}
  />
);
Castbar.propTypes = {
  castCompletion: PropTypes.number.isRequired,
};

export default Castbar;
