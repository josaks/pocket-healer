import React from 'react';
import { View } from 'react-native';
import style from '../config/style';
import DefaultText from './defaulttext';

import { Card, CardItem, Text, Body } from 'native-base';

const FightInfo = ({ boss }) => {
  const { name, info } = boss;

  return (
    <View style={style.fightInfo}>
      <Card>
        <CardItem header>
          <Text>{name}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{info}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

// const FightInfo = () => (
//   <View style={style.fightInfo}>
//     <DefaultText>Some information about the bossfight</DefaultText>
//   </View>
// );
export default FightInfo;
