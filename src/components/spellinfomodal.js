import React from 'react';
import {Modal, Text, TouchableOpacity, View, Button} from 'react-native';
import style from '../config/style';
import ClickOutsideToCloseModal from './clickoutsidetoclosemodal';

export default class SpellInfoModal extends React.Component {
  render() {
    const {manaCost, name, casttime, healAmount} = this.props.spell;

    return (
      <View>
        <ClickOutsideToCloseModal
          visible={this.props.visible}
          hide={this.props.hide}
          render={() => (
            <View style={style.spellInfoModal}>
              <Text>Name: {name}</Text>
              <Text>Heal Amount: {healAmount}</Text>
              <Text>Manacost: {manaCost}</Text>
              <Text>Casttime: {casttime}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
