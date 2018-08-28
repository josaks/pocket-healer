import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from '../config/style';

const SpellListEntry = ({ selected, selectSpell, name, openInfo }) => {
  let selectedStyle = {};
  if (selected) {
    selectedStyle = { backgroundColor: '#66a3ff' };
  }

  return (
    <TouchableOpacity onPress={selectSpell}>
      <View style={[style.spellListEntry, selectedStyle]}>
        <Image
          style={{ height: 50, width: 50, resizeMode: 'stretch', margin: 5 }}
          source={{ uri: 'http://via.placeholder.com/50/111111' }}
        />
        <Text>{name}</Text>
        <TouchableOpacity onPress={openInfo}>
          <FontAwesome name="info" size={50} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
SpellListEntry.propTypes = {
  selected: PropTypes.bool.isRequired,
  selectSpell: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  openInfo: PropTypes.func.isRequired,
};

export default SpellListEntry;
