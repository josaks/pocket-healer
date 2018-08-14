import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import ResourceBar from './resourcebar';

export default class BossHealthbar extends React.Component{
  render(){
    return(
      <ResourceBar
        fillPercent={this.props.fillPercent}
        fillColor={style.bossHealthbarColor}
        frameStyle={style.bossHealthbar}
        content={() => (
          <View>
            <Text>{this.props.text}</Text>
          </View>
        )}
      />
    );
  }
};
