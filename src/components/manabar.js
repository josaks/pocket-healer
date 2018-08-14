import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import ResourceBar from './resourcebar';

export default class Manabar extends React.Component {
  render(){
    return(
      <ResourceBar
        fillPercent={this.props.fillPercent}
        fillColor={style.manabarColor}
        frameStyle={style.manabar}
      />
    );
  }
};
