import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import style from '../config/style';
import RaiderHealthbar from './raiderhealthbar';
import RaiderStatusbar from './raiderstatusbar';
import { raiderMaxHealth } from '../config/settings';

const Raider = ({ onpress, hp, effects }) => (
  <TouchableOpacity style={style.raider} onPress={onpress}>
    <RaiderHealthbar
      fillPercent={(hp / raiderMaxHealth) * 100}
    />
    <RaiderStatusbar
      effects={effects}
    />
  </TouchableOpacity>
);
Raider.propTypes = {
  onpress: PropTypes.func.isRequired,
  hp: PropTypes.number.isRequired,
  effects: PropTypes.number.isRequired,
};

export default Raider;
