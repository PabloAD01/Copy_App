import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../providers/AuthProvider';
import {RegisterScreenNavigationProp} from '../components/modals/AuthModal';
import RegisterForm from '../components/forms/RegisterForm';

type Props = {};

const RegisterModal = ({route, navigation}: RegisterScreenNavigationProp) => {
  const {setLoginHeight} = useContext(AuthContext);

  const onLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setLoginHeight(height);
  };

  return (
    <View onLayout={onLayout} style={{backgroundColor: 'white', padding: 20}}>
      <Text style={styles.modalText}>REGISTER</Text>
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
      <RegisterForm navigation={navigation} route={route} />
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});

export default RegisterModal;
