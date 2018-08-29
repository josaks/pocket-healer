/* eslint react/prop-types: 0 */

import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import FightInfo from '../components/fightinfo';
import RejectBtn from '../components/rejectbtn';
import AcceptBtn from '../components/acceptbtn';

export default class FightInfoScreen extends React.Component {
  goBack() {
    this.props.navigation.goBack();
  }

  showSpells() {
    this.props.navigation.navigate('Spells', {
      boss: this.props.navigation.getParam('boss'),
    });
  }

  render() {
    return (
      <View style={style.fightInfoScreen}>
        <FightInfo />
        <View style={style.fightInfoButtonsContainer}>
          <RejectBtn onpress={() => this.goBack()} />
          <AcceptBtn onpress={() => this.showSpells()} />
        </View>
      </View>
    );
  }
}
