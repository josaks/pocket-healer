import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import ResourceBar from './resourcebar';

export default class RaiderHealthbar extends React.Component{
  render(){
    return(
      <ResourceBar
        fillPercent={this.props.fillPercent}
        fillColor={style.raiderHealthbarColor}
        frameStyle={style.raiderHealthbar}
      />
    );
  }
};
