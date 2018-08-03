import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import style from '../config/style';
const { width } = Dimensions.get('window');

export default class Castbar extends React.Component {
  render(){
    return(
      <View style={style.castbarFrame}>
        <View style={[style.castbarFill, {width: width * (this.props.castCompletion / 1000)}]}>
        </View>
      </View>
    );
  }
};
