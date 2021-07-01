import {Alert, Pressable, Text, TextInput, View} from 'react-native';
import styles from './styles';
import React from 'react';
import Modal from 'react-native-modal';

const ModalInput = ({
  setModalVisible,
  modalVisible,
  additionalInfo,
  setAdditionalInfo,
}) => (
  <Modal
    animationType="slide"
    backdropOpacity={0.5}
    isVisible={modalVisible}
    onBackdropPress={() => setModalVisible(false)}
    transparent={true}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Deseja adicionar uma unidade?</Text>

        <TextInput
          style={styles.input}
          placeholder="Insira a informação adicional"
          value={additionalInfo}
          onChangeText={additionalInfo => setAdditionalInfo(additionalInfo)}
        />

        <View style={styles.buttonModalView}>
          <Pressable
            style={[styles.buttonModal, styles.buttonCancel]}
            onPress={() => {
              setModalVisible(!modalVisible);
              setAdditionalInfo('');
            }}>
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonModal, styles.buttonOk]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </Modal>
);

export default ModalInput;
