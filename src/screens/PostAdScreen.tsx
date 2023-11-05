import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
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
import {Formik} from 'formik';
import * as Yup from 'yup';

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
  const [titlePosition, setTitlePosition] = useState(26);
  const [textInputValue, setTextInputValue] = useState('');

  const {region} = useContext(GlobalContext);
  console.log('region', region);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLocations = () => {
    navigation.navigate('Locations');
  };

  const handleTextInputChange = (text: string) => {
    setTextInputValue(text);
  };

  const handleTextInputFocus = () => {
    if (textInputValue === '') {
      setTitlePosition(10);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          // Lógica para manejar la subida del formulario
          console.log(values);
        }}>
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
                  {region === '' ? (
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      Seleccione una ubicación
                    </Text>
                  ) : (
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      {region}
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
                  value={values.price}
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
          </ScrollView>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default PostAdScreen;
