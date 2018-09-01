import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FightSelectScreen from './screens/fightselectscreen';
import SpellScreen from './screens/spellscreen';
import FightInfoScreen from './screens/fightinfoscreen';
import EncounterScreen from './screens/encounterscreen';

const RootStack = createStackNavigator(
  {
    // Decide which screens our routes use
    FightSelect: FightSelectScreen,
    Spells: SpellScreen,
    FightInfo: FightInfoScreen,
    Encounter: EncounterScreen,
  },
  {
    initialRouteName: 'FightSelect',
    // Header styles for all routes
    navigationOptions: {
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default RootStack;
