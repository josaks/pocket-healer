import React from 'react';
import PropTypes from 'prop-types';
import { Modal, TouchableOpacity, View } from 'react-native';
import style from '../config/style';

const ClickOutsideToCloseModal = ({ visible, hide, render }) => (
  <View>
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={hide}
    >
      <TouchableOpacity style={style.spellSelectModal} onPress={hide}>
        {render()}
      </TouchableOpacity>
    </Modal>
  </View>
);
ClickOutsideToCloseModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

export default ClickOutsideToCloseModal;
