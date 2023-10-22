import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', gap: 10}}>
      <View
        style={{
          height: '20%',
          backgroundColor: '#FF6205',
          borderBottomEndRadius: 40,
          justifyContent: 'center',
          alignItems: 'center',

          paddingHorizontal: 25,
        }}>
        <Image
          source={require('../../assets/images/copyimg.png')}
          style={{width: 100, height: 100}}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#32589F',
            padding: 10,
            borderRadius: 30,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            INGRESAR A MI CUENTA
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 10, backgroundColor: 'white', gap: 10}}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            flexDirection: 'row',
            borderRadius: 5,
            padding: 10,
          }}>
          <Feather name="box" size={20} color={'#6A6A6A'} style={{flex: 1}} />
          <Text
            style={{
              color: '#6A6A6A',
              fontSize: 15,
              fontWeight: '400',
              flex: 4,
            }}>
            Avisos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            flexDirection: 'row',
            borderRadius: 5,
            padding: 10,
          }}>
          <FontAwesome
            name="edit"
            size={20}
            color={'#6A6A6A'}
            style={{flex: 1}}
          />
          <Text
            style={{
              color: '#6A6A6A',
              fontSize: 15,
              fontWeight: '400',
              flex: 4,
            }}>
            Publicar aviso
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            flexDirection: 'row',
            borderRadius: 5,
            padding: 10,
          }}>
          <Entypo name="chat" size={20} color={'#6A6A6A'} style={{flex: 1}} />
          <Text
            style={{
              color: '#6A6A6A',
              fontSize: 15,
              fontWeight: '400',
              flex: 4,
            }}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            flexDirection: 'row',
            borderRadius: 5,
            padding: 10,
          }}>
          <FontAwesome
            name="user-circle-o"
            size={20}
            color={'#6A6A6A'}
            style={{flex: 1}}
          />
          <Text
            style={{
              color: '#6A6A6A',
              fontSize: 15,
              fontWeight: '400',
              flex: 4,
            }}>
            Mi cuenta
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            flexDirection: 'row',
            borderRadius: 5,
            padding: 10,
          }}>
          <Octicons
            name="shield-check"
            size={20}
            color={'#6A6A6A'}
            style={{flex: 1}}
          />
          <Text
            style={{
              color: '#6A6A6A',
              fontSize: 15,
              fontWeight: '400',
              flex: 4,
            }}>
            Servicio al cliente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            flexDirection: 'row',
            borderRadius: 5,
            padding: 10,
          }}>
          <Octicons name="info" size={20} color={'#6A6A6A'} style={{flex: 1}} />
          <Text
            style={{
              color: '#6A6A6A',
              fontSize: 15,
              fontWeight: '400',
              flex: 4,
            }}>
            Información general
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 5,
          backgroundColor: 'white',
          gap: 5,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            flex: 1,
          }}>
          <Feather name="instagram" size={20} color={'#6A6A6A'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            flex: 1,
          }}>
          <Ionicons name="logo-facebook" size={20} color={'#6A6A6A'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            flex: 1,
          }}>
          <FontAwesome name="youtube-play" size={20} color={'#6A6A6A'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            flex: 1,
          }}>
          <FontAwesome name="linkedin-square" size={20} color={'#6A6A6A'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#e5e3e3',
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
            flex: 1,
          }}>
          <Entypo name="google-play" size={20} color={'#6A6A6A'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
