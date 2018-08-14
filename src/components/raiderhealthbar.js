import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import style from '../config/style';
import ResourceBar from './resourcebar';

export default class RaiderHealthbar extends React.Component{
  render(){
    return(
      <TouchableOpacity onPress={this.props.onpress}>
        <ResourceBar
          fillPercent={this.props.fillPercent}
          fillColor={style.raiderHealthbarColor}
          frameStyle={style.raiderHealthbar}
        />
      </TouchableOpacity>
    );
  }
};
