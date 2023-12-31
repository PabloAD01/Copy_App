import React, {useContext, useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import {Formik, FormikProps} from 'formik';
import {useIsFocused} from '@react-navigation/native';
import {AuthContext} from '../../providers/AuthProvider';
import {
  LoginScreenNavigationProp,
  RegisterScreenNavigationProp,
} from '../../components/modals/AuthModal';
import LocationsModal, {Region} from '../../components/modals/LocationsModal';

type Props = {
  setRegionModalVisible: (regionModalVisible: boolean) => void;
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8).required('Password is required'),
  name: Yup.string().max(20).required('Name is required'),
  lastName: Yup.string().max(20).required('Last Name is required'),
  location: Yup.string()
    .required('Location is required')
    .notOneOf(['Selecciona una región'], 'Location is required'),
});

const RegisterForm = ({route, navigation}: RegisterScreenNavigationProp) => {
  const {Register} = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);
  const [isRegionModalVisible, setRegionModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Region | null>(null);
  const formikRef = useRef<
    FormikProps<{
      email: string;
      password: string;
      name: string;
      lastName: string;
      location: string;
    }>
  >(null);

  const focused = useIsFocused();

  const reRenderRef = useRef(false);

  useEffect(() => {
    console.log('reRender');
    const timeoutId = setTimeout(() => {
      reRenderRef.current = !reRenderRef.current;
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [focused]);

  const toggleScreen = () => {
    navigation.replace('Login');
  };

  useEffect(() => {
    if (selectedLocation && formikRef.current) {
      formikRef.current.setFieldValue('location', selectedLocation.region);
    }
  }, [selectedLocation]);

  const handleRegister = async (values: {
    email: string;
    password: string;
    name: string;
    lastName: string;
    location: string;
  }) => {
    try {
      const {email, password, name, lastName, location} = values;
      const response = await Register(
        email,
        password,
        name,
        lastName,
        location,
      );
    } catch (error) {
      console.log(error);
    }
  };

  console.log(selectedLocation?.region);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          lastName: '',
          location: 'Selecciona una región',
        }}
        innerRef={formikRef}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{width: '100%', gap: 10}}>
            <TextInput
              placeholder="Name"
              style={{height: 40, width: '100%', borderBottomWidth: 1}}
              onChangeText={text => {
                handleChange('name')(text);
                setError(null);
              }}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <TextInput
              placeholder="Last name"
              style={{height: 40, width: '100%', borderBottomWidth: 1}}
              onChangeText={text => {
                handleChange('lastName')(text);
                setError(null);
              }}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}
            <TouchableOpacity
              style={{
                height: 40,
                width: '100%',
                borderBottomWidth: 1,
                justifyContent: 'center',
              }}
              onPress={() => setRegionModalVisible(true)}>
              <Text
                style={{
                  color: 'black',
                }}>
                {values.location}
              </Text>
            </TouchableOpacity>

            {values.location === 'Selecciona una región' && errors.location && (
              <Text style={styles.errorText}>{errors.location}</Text>
            )}

            <TextInput
              placeholder="Email"
              style={{height: 40, width: '100%', borderBottomWidth: 1}}
              onChangeText={text => {
                handleChange('email')(text);
                setError(null);
              }}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              placeholder="Password"
              style={{height: 40, width: '100%', borderBottomWidth: 1}}
              onChangeText={text => {
                handleChange('password')(text);
                setError(null);
              }}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleSubmit()}>
              <Text style={styles.textStyle}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleScreen}>
              <Text>To Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <LocationsModal
        isVisible={isRegionModalVisible}
        closeModal={() => setRegionModalVisible(false)}
        setSelectedLocation={setSelectedLocation}
      />
    </>
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

export default RegisterForm;
