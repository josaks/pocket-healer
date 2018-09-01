import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import FightInfo from '../components/fightinfo';
import BackBtn from '../components/backbtn';
import NextBtn from '../components/nextbtn';


export default class FightInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { name } = navigation.getParam('boss');
    return ({
      title: name,
    });
  };

  goBack = () => {
    this.props.navigation.goBack();
  }

  showSpells = () => {
    this.props.navigation.navigate('Spells', {
      boss: this.props.navigation.getParam('boss'),
    });
  }

  render() {
    const { name, info } = this.props.navigation.getParam('boss');

    return (
      <View style={style.fightInfoScreen}>
        <FightInfo boss={{ name, info }} />
        <View style={style.navButtonsContainer}>
          <BackBtn onPress={this.goBack} />
          <NextBtn onPress={this.showSpells} />
        </View>
      </View>
    );
  }
}
