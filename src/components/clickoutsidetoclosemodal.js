import React from 'react';
import {Modal, Text, TouchableOpacity, View, Button} from 'react-native';
import style from '../config/style';

export default class ClickOutsideToCloseModal extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={this.props.hide}
        >
          <TouchableOpacity style={style.spellSelectModal} onPress={this.props.hide}>
              {this.props.render()}
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
