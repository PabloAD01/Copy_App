import React, {useEffect, useState} from 'react';
import {
  Modal,
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {ApiL} from '../../../Api';

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginModal = ({modalVisible, setModalVisible}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${ApiL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      if (response.ok) {
        // El inicio de sesión fue exitoso
        // Puedes manejar la respuesta aquí, por ejemplo, cerrar el modal
        setModalVisible(false);
      } else {
        // El inicio de sesión falló
        const data = await response.json();
        setError(data.msg || 'Error de inicio de sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={values => {
          console.log(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <KeyboardAvoidingView
            behavior={Platform.select({ios: 'padding', android: 'height'})}
            style={{flex: 1}}>
            <View
              style={{
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
              }}>
              <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                  // Handle form submission here
                  // values object contains validated form values
                  console.log(values);
                }}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>INGRESAR</Text>
                  <View style={{width: '100%', gap: 10}}>
                    <Text>Conectar con</Text>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        borderColor: '#e5e3e3',
                        backgroundColor: '#4081EC',
                        flexDirection: 'row',
                        borderRadius: 5,
                        padding: 8,
                      }}>
                      <AntDesign name="google" size={20} color={'white'} />
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 15,
                          fontWeight: '600',
                          flex: 4,
                          textAlign: 'center',
                        }}>
                        Sign in with Google
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '100%', gap: 10}}>
                    <TextInput
                      placeholder="Email"
                      style={{height: 40, width: '100%', borderBottomWidth: 1}}
                      onChangeText={text => setEmail(text)}
                      value={email}
                    />
                    {error && <Text style={styles.errorText}>{error}</Text>}
                    <TextInput
                      placeholder="Password"
                      style={{height: 40, width: '100%', borderBottomWidth: 1}}
                      onChangeText={text => setPassword(text)}
                      value={password}
                      secureTextEntry
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={handleLogin}>
                    <Text style={styles.textStyle}>Iniciar Sesión</Text>
                  </TouchableOpacity>
                </View>
              </Formik>
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
      {/*  */}
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
    gap: 10,
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
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});

export default LoginModal;
