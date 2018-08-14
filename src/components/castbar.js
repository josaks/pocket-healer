import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import style from '../config/style';
import ResourceBar from './resourcebar';

export default class Castbar extends React.Component {
  render(){
    return(
      <ResourceBar
        fillPercent={this.props.castCompletion}
        fillColor={style.castbarColor}
        frameStyle={style.castBar}
      />
    );
  }
};
