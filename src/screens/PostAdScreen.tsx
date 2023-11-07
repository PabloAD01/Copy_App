import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeScreenNavigationProp} from '../../App';
import {GlobalContext} from '../providers/GlobalProvider';
import {Formik, FormikProps, FormikValues} from 'formik';
import * as Yup from 'yup';
import {AuthContext} from '../providers/AuthProvider';

type Props = {};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('El título es obligatorio')
    .min(10, 'El título debe tener al menos 10 caracteres')
    .max(50, 'El título debe un máximo de 50 caracteres'),
  price: Yup.number()
    .required('El precio es obligatorio')
    .positive('El precio debe ser un número positivo'),
  description: Yup.string().max(
    2000,
    'La descripción debe tener un tamaño maximo de 2000 caracteres',
  ),
});

const PostAdScreen = (props: Props) => {
  const {PostAd} = useContext(AuthContext);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const formikRef = useRef<
    FormikProps<{
      title: string;
      price: number;
      description: string;
      location: string;
    }>
  >(null);

  const setLocation = (location: string) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue('location', location);
    }
  };

  const handleLocations = () => {
    navigation.navigate('Locations', {setLocation});
  };

  const handlePostAd = async (values: {
    title: string;
    price: number;
    description: string;
    location: string;
  }) => {
    try {
      const response = await PostAd(
        values.title,
        values.description,
        values.price,
        values.location,
      );

      console.log(values);
    } catch (error) {}
  };

  useEffect(() => {});

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Formik
        initialValues={{
          title: '',
          price: 0,
          description: '',
          location: '',
        }}
        innerRef={formikRef}
        validationSchema={validationSchema}
        onSubmit={handlePostAd}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <ScrollView style={{height: '100%'}}>
            <View
              style={{
                width: '100%',
                paddingVertical: 4,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    gap: 32,
                  }}>
                  <Image
                    source={{uri: 'https://dummyimage.com/300'}}
                    style={{width: 100, height: 100, borderRadius: 8}}
                  />
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 8,
                    }}></View>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 8,
                    }}></View>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 8,
                    }}></View>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 8,
                    }}></View>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderWidth: 1,
                      borderRadius: 8,
                    }}></View>
                </View>
              </ScrollView>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Puedes subir hasta 6 fotos
              </Text>
            </View>

            <View
              style={{
                gap: 8,
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                }}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderRadius: 8,
                  }}
                  placeholder="Titulo"
                  onChangeText={handleChange('title')}
                  value={values.title}
                />
                {touched.title && errors.title && (
                  <Text style={{color: 'red'}}>{errors.title}</Text>
                )}
              </View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
                    Categoría
                  </Text>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Vendo
                  </Text>
                </View>
                <AntDesign name="right" size={14} color="black" />
              </TouchableOpacity>
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
                onPress={handleLocations}>
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
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                }}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderRadius: 8,
                  }}
                  placeholder="Precio ($)"
                  onChangeText={handleChange('price')}
                  value={values.price.toString()}
                />
                {touched.price && errors.price && (
                  <Text style={{color: 'red'}}>{errors.price}</Text>
                )}
              </View>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                }}>
                <TextInput
                  multiline
                  style={{
                    height: 40,
                    borderColor: 'gray',
                    paddingHorizontal: 10,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderRadius: 8,
                  }}
                  placeholder="Descripción"
                  onChangeText={handleChange('description')}
                  value={values.description}
                />
                {touched.description && errors.description && (
                  <Text style={{color: 'red'}}>{errors.description}</Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF842C',
                paddingVertical: 16,
                paddingHorizontal: 32,
                borderRadius: 8,
                alignItems: 'center',
                marginVertical: 20,
              }}
              onPress={() => handleSubmit()} // handleSubmit de Formik se encargará de manejar el envío del formulario
            >
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Publicar Anuncio
              </Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default PostAdScreen;
