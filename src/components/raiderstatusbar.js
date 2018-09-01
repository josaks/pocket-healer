/* Turn off eslint rule */
/* eslint react/no-array-index-key: 0 */

import React from 'react';
import { View, Image } from 'react-native';
import style from '../config/style';

const RaiderStatusbar = ({ effects }) => (
  <View style={style.raiderStatusbar}>
    {
      effects.map((effect, i) => (
        <View style={style.effect} key={i}>
          <Image
            style={{ height: 10, width: 10, resizeMode: 'stretch' }}
            source={{ uri: effect.image }}
          />
        </View>
      ))
    }
  </View>
);

export default RaiderStatusbar;
