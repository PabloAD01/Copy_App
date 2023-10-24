import React from 'react';
import {
  Modal,
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const LoginModal = ({modalVisible, setModalVisible}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>INGRESAR</Text>
          <View style={{width: '100%', gap: 10}}>
            <Text>Conectar con</Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#e5e3e3',
                backgroundColor: '#0062E2',
                flexDirection: 'row',
                borderRadius: 5,
                padding: 8,
              }}>
              <Ionicons name="logo-facebook" size={20} color={'white'} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '600',
                  flex: 4,
                  textAlign: 'center',
                }}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', gap: 10}}>
            <TextInput
              placeholder="Email"
              style={{height: 40, width: '100%', borderBottomWidth: 1}}
            />
            <TextInput
              placeholder="Contraseña"
              style={{height: 40, width: '100%', borderBottomWidth: 1}}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '50%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF6205',
    borderBottomWidth: 2,
    padding: 10,
    borderColor: '#FF6205',
  },
});

export default LoginModal;
