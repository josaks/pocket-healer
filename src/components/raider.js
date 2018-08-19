import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from '../config/style';
import RaiderHealthbar from './raiderhealthbar';
import RaiderStatusbar from './raiderstatusbar';
import { raiderMaxHealth } from '../config/settings';

export default class Raider extends React.Component{
  render(){
    return(
      <TouchableOpacity style={style.raider} onPress={this.props.onpress}>
        <RaiderHealthbar
          fillPercent={(this.props.hp / raiderMaxHealth) * 100}
        />
        <RaiderStatusbar
          effects={this.props.effects}
        />
      </TouchableOpacity>
    );
  }
};
