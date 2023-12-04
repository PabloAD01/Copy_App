import {Formik, FormikProps} from 'formik';
import React, {useContext, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';
import {AuthContext} from '../../providers/AuthProvider';

type Props = {};

const schema = Yup.object({
  name: Yup.string().max(50).required(),
  phone: Yup.number().typeError('Se requiere un número'),
  password: Yup.string().min(8).required('Se requiere contraseña'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
  location: Yup.string().required('Location is required'),
});

const EditProfileForm = ({navigation}: {navigation: any}) => {
  const {email, name, location, updateUser} = useContext(AuthContext);
  const [accountType, setAccountType] = useState(true);
  const formikRef = useRef<
    FormikProps<{
      name: string;
      phone: number;
      location: string;
      password: string;
      confirmPassword: string;
    }>
  >(null);

  const handleSubmit = async (values: {
    name: string;
    phone: number;
    location: string;
    password: string;
  }) => {
    try {
      const response = await updateUser(
        values.name,
        values.phone,
        values.location,
        values.password,
      );
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: name || '',
        phone: 0,
        location: location || '',
        password: '',
        confirmPassword: '',
      }}
      innerRef={formikRef}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <ScrollView style={{height: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              paddingVertical: 24,
            }}>
            <FontAwesome name="user-circle-o" size={100} color="gray" />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                gap: 2,
              }}>
              <TouchableOpacity
                style={
                  accountType
                    ? {
                        paddingVertical: 8,
                        backgroundColor: '#FF6205',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                    : {
                        paddingVertical: 8,
                        backgroundColor: '#B6B6B6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                }
                onPress={() => setAccountType(true)}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}>
                  Persona
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  accountType
                    ? {
                        paddingVertical: 8,
                        backgroundColor: '#B6B6B6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                    : {
                        paddingVertical: 8,
                        backgroundColor: '#FF6205',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                }
                onPress={() => setAccountType(false)}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}>
                  Profesional
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{gap: 8}}>
            {/* Email field */}
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
              }}>
              <Text style={{color: 'gray'}}>Email</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                  borderRadius: 8,
                  color: 'black',
                }}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={email}
                editable={false}
              />
            </View>

            {/* Name field */}
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
              }}>
              <Text style={{color: 'gray'}}>Nombre</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                  borderRadius: 8,
                  color: 'black',
                }}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={{color: 'red'}}>{errors.name}</Text>
              )}
            </View>

            {!accountType && (
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                }}>
                <Text style={{color: 'gray'}}>R.U.T.</Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderRadius: 8,
                    color: 'black',
                  }}
                  placeholder="Rut"
                  placeholderTextColor={'gray'}
                  value={values.phone.toString()}
                />
                {touched.phone && errors.phone && (
                  <Text style={{color: 'red'}}>{errors.phone}</Text>
                )}
              </View>
            )}

            {/* Phone field */}
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
              }}>
              <Text style={{color: 'gray'}}>Teléfono</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                  borderRadius: 8,
                  color: 'black',
                }}
                placeholder="912345678"
                placeholderTextColor={'gray'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone.toString()}
                keyboardType="numeric"
                maxLength={9}
              />
              {touched.phone && errors.phone && (
                <Text style={{color: 'red'}}>{errors.phone}</Text>
              )}
            </View>

            {/* Location field */}
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => {}}>
              <View>
                <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
                  Ubicación
                </Text>
                {values.location === '' ? (
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Seleccione una ubicación
                  </Text>
                ) : (
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {values.location}
                  </Text>
                )}
              </View>
              <AntDesign name="right" size={14} color="black" />
            </TouchableOpacity>

            {/* Password field */}
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
              }}>
              <Text style={{color: 'gray'}}>Contraseña</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                  borderRadius: 8,
                  color: 'black',
                }}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              {touched.password && errors.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
            </View>

            {/* Confirm Password field */}
            <View
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
              }}>
              <Text style={{color: 'gray'}}>Confirmar contraseña</Text>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  borderBottomWidth: 1,
                  borderRadius: 8,
                  color: 'black',
                }}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={true}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={{color: 'red'}}>{errors.confirmPassword}</Text>
              )}
            </View>
          </View>
          <View style={{paddingHorizontal: 16}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#0977B6',
                paddingVertical: 16,
                paddingHorizontal: 32,
                borderRadius: 8,
                alignItems: 'center',
                marginVertical: 20,
              }}
              onPress={() => handleSubmit()} // handleSubmit de Formik se encargará de manejar el envío del formulario
            >
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Actualizar perfil{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default EditProfileForm;
