import {Formik} from 'formik';
import React, {useContext} from 'react';
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
import {AuthContext} from '../providers/AuthProvider';

type Props = {};

const schema = Yup.object({
  email: Yup.string().email().required(),
  name: Yup.string().max(50).required(),
  phone: Yup.number().required(),
  password: Yup.string().min(8).required('Se requiere contraseña'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
  location: Yup.string().required('Location is required'),
});

const EditProfile = (props: Props) => {
  const {email, name} = useContext(AuthContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Formik
        initialValues={{
          email: email || '',
          name: name || '',
          phone: 0,
          location: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={schema}
        onSubmit={values => console.log('submit', values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
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
                style={{flex: 1, gap: 8, flexDirection: 'row', borderWidth: 1}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    borderRightWidth: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                  }}>
                  <Text>Persona</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    borderRightWidth: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                  }}>
                  <Text>Profesional</Text>
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
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={{color: 'red'}}>{errors.email}</Text>
                )}
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
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone.toString()}
                  keyboardType="numeric"
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
                  multiline
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
                  secureTextEntry
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
                  multiline
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
                  secureTextEntry
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
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                  Actualizar perfil{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
