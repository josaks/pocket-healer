import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import style from '../config/style';
import ClickOutsideToCloseModal from './clickoutsidetoclosemodal';

const SpellInfoModal = ({ spell, visible, hide }) => {
  const { manaCost, name, casttime, healAmount } = spell;

  return (
    <View>
      <ClickOutsideToCloseModal
        visible={visible}
        hide={hide}
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
};
SpellInfoModal.propTypes = {
  spell: PropTypes.isRequired,
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};
