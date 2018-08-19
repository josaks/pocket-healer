import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import ClickOutsideToCloseModal from './clickoutsidetoclosemodal';
import style from '../config/style';

export default class SpellSelectModal extends React.Component {
  render() {
    return (
      <View>
        <ClickOutsideToCloseModal
          visible={this.props.visible}
          hide={this.props.hide}
          render={() => (
            <View style={style.spellSelectModal}>
              <TouchableOpacity
                style={style.spellSelectModalButton}
                onPress={this.props.selectSpell}
              >
                <Text style={style.spellSelectModalButtonTxt}>Choose as spell 1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.spellSelectModalButton}
                onPress={this.props.selectSpell}
              >
                <Text style={style.spellSelectModalButtonTxt}>Choose as spell 2</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}
