import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../config/style';

export default class RaiderStatusbar extends React.Component{
  render(){
    return(
      <View style={style.raiderStatusbar}>
        {
          this.props.effects.map((effect, i) => {
            return(
              <View style={style.effect} key={i}>
                <Image
                  style={{height: 10, width: 10, resizeMode: 'stretch'}}
                  source={{uri: effect.image}}
                />
              </View>
            );
          })
        }
      </View>
    );
  }
};
