import React from 'react';
import {Modal, Text, TouchableOpacity, View, Button} from 'react-native';
import style from '../config/style';

export default class SpellSelectModal extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visibility}
          onRequestClose={() => {
            this.props.setModalVisible(false);
          }}
        >
          <TouchableOpacity style={style.spellSelectModal} onPress={() => {this.props.setModalVisible(false)}}>
              <TouchableOpacity
                style={style.spellSelectModalButton}
                onPress={() => this.props.selectSpell(this.props.spellToBeSelected, 0)}
              >
                <Text style={style.spellSelectModalButtonTxt}>Choose as spell 1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={style.spellSelectModalButton}
                onPress={() => this.props.selectSpell(this.props.spellToBeSelected, 1)}
              >
                <Text style={style.spellSelectModalButtonTxt}>Choose as spell 2</Text>
              </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
