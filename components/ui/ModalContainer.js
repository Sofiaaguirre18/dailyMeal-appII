import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

const ModalContainer = ({ visible, children, style }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={[styles.container, style]}>{children}</View>
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF7E6',
  },
});