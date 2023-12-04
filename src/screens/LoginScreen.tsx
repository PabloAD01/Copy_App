import React, {useContext, useEffect, useState, useLayoutEffect} from 'react';
import {
  Modal,
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {AuthContext} from '../providers/AuthProvider';
import {LoginScreenNavigationProp} from '../components/modals/AuthModal';
import {HomeScreenNavigationProp} from '../../App';
import LoginForm from '../components/forms/LoginForm';

type Props = {};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginModal = ({route, navigation}: LoginScreenNavigationProp) => {
  const {setLoginHeight} = useContext(AuthContext);

  const onLayout = (event: any) => {
    const {height} = event.nativeEvent.layout;
    setLoginHeight(height);
  };

  return (
    <View onLayout={onLayout} style={{backgroundColor: 'white', padding: 20}}>
      <Text style={styles.modalText}>LOG IN</Text>
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
      <LoginForm navigation={navigation} route={route} />
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

export default LoginModal;
