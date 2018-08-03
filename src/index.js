import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FightSelectScreen from './screens/fightselectscreen';
import SpellScreen from './screens/spellscreen';
import FightInfoScreen from './screens/fightinfoscreen';
import EncounterScreen from './screens/encounterscreen';

const RootStack = createStackNavigator(
  {
    FightSelect: FightSelectScreen,
    Spells: SpellScreen,
    FightInfo: FightInfoScreen,
    Encounter: EncounterScreen,
  },
  {
    initialRouteName: 'FightSelect',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    //header customization
    // navigationOptions:{
    //   headerStyle: {
    //     backgroundColor: 'gray',
    //   },
    //   headerTintColor: 'blue',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  }
);

export default class Index extends React.Component{
  render() {
    return (
      <RootStack />
    );
  }
};
