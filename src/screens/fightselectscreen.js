import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import FightBtn from '../components/fightbtn';

// bosses
import Boss1 from '../lib/bosses/boss1';

export default class FightBtnSelectScreen extends React.Component {
  static navigationOptions = {
    title: 'Choose a boss to fight',
  };

  openFightInfo = (boss) => {
    this.props.navigation.navigate('FightInfo', { boss });
  }

  render() {
    const { openFightInfo } = this;

    return (
      <View style={style.mapScreen}>
        <View style={style.mapRow}>
          <FightBtn
            name={Boss1.name}
            onpress={() => openFightInfo(Boss1)}
          />
          <FightBtn name="Fight 2" />
          <FightBtn name="Fight 3" />
        </View>
        <View style={style.mapRow}>
          <FightBtn name="Fight 4" />
          <FightBtn name="Fight 5" />
          <FightBtn name="Fight 6" />
        </View>
        <View style={style.mapRow}>
          <FightBtn name="Fight 7" />
          <FightBtn name="Fight 8" />
          <FightBtn name="Fight 9" />
        </View>
      </View>
    );
  }
}
