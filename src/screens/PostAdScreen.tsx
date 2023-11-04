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

type Props = {};

const PostAdScreen = (props: Props) => {
  const [titlePosition, setTitlePosition] = useState(26);
  const [textInputValue, setTextInputValue] = useState('');

  const {region} = useContext(GlobalContext);

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
      <ScrollView style={{height: '100%'}}>
        <View
          style={{
            width: '100%',
            paddingVertical: 4,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
            <Text
              style={{
                position: 'absolute',
                zIndex: 99999,
                left: 26,
                top: 26,
              }}>
              Título
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderRadius: 8,
              }}
              onFocus={handleTextInputFocus}
              onChangeText={handleTextInputChange}
            />
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
              <Text style={{color: 'black', fontWeight: 'bold'}}>Vendo</Text>
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
              <Text style={{color: 'black', fontWeight: 'bold'}}></Text>
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
            <Text
              style={{
                position: 'absolute',
                zIndex: 99999,
                left: 26,
                top: 26,
              }}>
              Precio ($)
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                paddingHorizontal: 10,
                backgroundColor: 'white',
                borderBottomWidth: 1,
                borderRadius: 8,
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text
              style={{
                position: 'absolute',
                zIndex: 99999,
                left: 26,
                top: 26,
              }}>
              Descripción
            </Text>
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
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PostAdScreen;
