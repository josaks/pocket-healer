import React from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import style from '../config/style';


export default class RaiderHealthbar extends React.Component{
  render(){
    let widthNumber = (this.props.hp / 10);
    const widthString = widthNumber.toString() + '%';

    return(
      <TouchableOpacity onPress={this.props.onpress}>
        <View style={style.raiderHealthbarFrame}>
          <View style={[style.raiderHealthbarFill, {width: widthString}]}>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};
