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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeScreenNavigationProp} from '../../../App';
import {Formik, FormikProps, FormikValues} from 'formik';
import * as Yup from 'yup';
import {AuthContext} from '../../providers/AuthProvider';
import {
  launchCamera,
  launchImageLibrary,
  ImageLibraryOptions,
} from 'react-native-image-picker';

type Props = {};

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('El título es obligatorio')
    .min(10, 'El título debe tener al menos 10 caracteres')
    .max(50, 'El título debe un máximo de 50 caracteres'),
  price: Yup.number()
    .required('El precio es obligatorio')
    .positive('El precio debe ser un número positivo')
    .typeError('El precio debe ser un número'),
  description: Yup.string().max(
    2000,
    'La descripción debe tener un tamaño maximo de 2000 caracteres',
  ),
});

const imagesArray = [0, 1, 2, 3, 4, 5];
const dummyImage =
  'https://dummyimage.com/300x300/dfdfe3&text=Inserte+una+imagen';

const PostAdForm = (props: Props) => {
  const [galleryPhoto, setGalleryPhoto] = useState<string[]>([]);
  const {PostAd, name} = useContext(AuthContext);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const formikRef = useRef<
    FormikProps<{
      owner: string;
      title: string;
      price: number;
      description: string;
      location: string;
      category: string;
      images: string[];
    }>
  >(null);

  let options: ImageLibraryOptions = {
    mediaType: 'photo',
    includeBase64: true,
  };

  const updateImage = (id: number, base64: string) => {
    const newArray = [...galleryPhoto];
    newArray[id] = base64;
    setGalleryPhoto(newArray);
  };

  const openGallery = async (id: number) => {
    try {
      const result: any = await launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return;
        }
      });
      const imageB64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`;
      if (galleryPhoto[id] === undefined) {
        setGalleryPhoto(prevState => [...prevState, imageB64]);
      } else {
        updateImage(id, imageB64);
      }
    } catch (error) {
      console.error('Error selecting image from the gallery:', error);
    }
  };

  const setLocation = (location: string) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue('location', location);
    }
  };

  const setCategory = (category: string) => {
    if (formikRef.current) {
      formikRef.current.setFieldValue('category', category);
    }
  };

  const handleCategories = () => {
    navigation.navigate('Categories', {setCategory});
  };

  const handleLocations = () => {
    navigation.navigate('Locations', {setLocation});
  };

  const handlePostAd = async (values: {
    owner: string;
    title: string;
    price: number;
    description: string;
    location: string;
    category: string;
    images: string[];
  }) => {
    try {
      const response = await PostAd(
        values.owner,
        values.title,
        values.description,
        values.price,
        values.location,
        values.category,
        values.images,
      );
      if (formikRef.current) {
        formikRef.current.resetForm(); // Esta función de Formik restablecerá los valores del formulario a su estado inicial
        setGalleryPhoto([]); // También resetea la imagen de la galería
      }
      navigation.navigate('Home');
      console.log(values);
    } catch (error) {}
  };

  const handleResetFields = () => {
    if (formikRef.current) {
      formikRef.current.resetForm(); // Esta función de Formik restablecerá los valores del formulario a su estado inicial
      setGalleryPhoto([]); // También resetea la imagen de la galería
    }
  };

  useEffect(() => {
    formikRef.current?.setFieldValue('images', galleryPhoto);
  }, [galleryPhoto]);

  return (
    <Formik
      initialValues={{
        owner: name,
        title: '',
        price: 0,
        description: '',
        location: '',
        category: '',
        images: [''],
      }}
      innerRef={formikRef}
      validationSchema={validationSchema}
      onSubmit={handlePostAd}>
      {({handleChange, handleSubmit, values, errors, touched}) => (
        <ScrollView style={{height: '100%', paddingHorizontal: 10}}>
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
                {imagesArray.map((id, index) => {
                  return (
                    <TouchableOpacity onPress={() => openGallery(id)} key={id}>
                      <Image
                        style={{
                          height: 100,
                          width: 100,
                          borderWidth: 1,
                          borderRadius: 8,
                        }}
                        source={{
                          uri: values.images[id] || dummyImage,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
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
                  color: 'black',
                }}
                placeholder="Titulo"
                placeholderTextColor={'gray'}
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
              }}
              onPress={handleCategories}>
              <View>
                <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
                  Categorias
                </Text>
                {values.category === '' ? (
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    Seleccione una categoría
                  </Text>
                ) : (
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    {values.category}
                  </Text>
                )}
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
              <Text style={{color: 'gray'}}>Precio ($)</Text>
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
                  color: 'black',
                }}
                placeholder="Descripción"
                placeholderTextColor={'gray'}
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
              Publicar Anuncio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0000',
              paddingVertical: 16,
              paddingHorizontal: 32,
              borderRadius: 8,
              alignItems: 'center',
            }}
            onPress={handleResetFields} // Llama a la función para limpiar los campos
          >
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Limpiar Campos
            </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </Formik>
  );
};

export default PostAdForm;
