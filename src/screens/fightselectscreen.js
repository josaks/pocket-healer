import React from 'react';
import { View, Text } from 'react-native';
import style from '../config/style';
import FightBtn from '../components/fightbtn';

//bosses
import Boss1Logic from '../lib/bosses/boss1';

export default class FightBtnSelectScreen extends React.Component {
  static navigationOptions = {
      title: 'Map',
  };

  render() {
    return (
      <View style={style.mapScreen}>
        <View style={style.mapRow}>
          <FightBtn name='Fight 1' onpress={() => {this.props.navigation.navigate('FightInfo',{
            boss: Boss1Logic,
          })}}/>
          <FightBtn name='Fight 2'/>
          <FightBtn name='Fight 3'/>
        </View>
        <View style={style.mapRow}>
          <FightBtn name='Fight 4'/>
          <FightBtn name='Fight 5'/>
          <FightBtn name='Fight 6'/>
        </View>
        <View style={style.mapRow}>
          <FightBtn name='Fight 7'/>
          <FightBtn name='Fight 8'/>
          <FightBtn name='Fight 9'/>
        </View>
      </View>
    );
  }
};
