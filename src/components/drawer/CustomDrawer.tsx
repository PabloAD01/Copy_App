import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import FacebookButton from '../buttons/socials/FacebookButton';
import YoutubeButton from '../buttons/socials/YoutubeButton';
import LinkedinButton from '../buttons/socials/LinkedinButton';
import InstagramButton from '../buttons/socials/InstagramButton';
import GooglePlayButton from '../buttons/socials/GooglePlayButton';
import AdsButton from '../buttons/options/AdsButton';
import PostAdButton from '../buttons/options/PostAdButton';
import ChatButton from '../buttons/options/ChatButton';
import MyAccountButton from '../buttons/options/MyAccountButton';
import CustomerServiceButton from '../buttons/options/CustomerServiceButton';
import GeneralInfoButton from '../buttons/options/GeneralInfoButton';
import AuthModal from '../modals/AuthModal';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../../providers/AuthProvider';
import LogoutButton from '../buttons/options/LogoutButton';

type Props = {};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const {loggedIn, name, email} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'white', gap: 10}}>
      <View
        style={{
          height: 180,
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
        {loggedIn ? (
          <View
            style={{
              gap: 10,
              alignItems: 'flex-start',
              width: '100%',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {name}
            </Text>
            <Text style={{color: 'white', fontWeight: '500'}}>{email}</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#32589F',
              padding: 14,
              borderRadius: 30,
              alignItems: 'center',
            }}
            onPress={() => setModalVisible(true)}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                letterSpacing: 1,
                fontSize: 12,
              }}>
              INGRESAR A MI CUENTA
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{paddingHorizontal: 10, backgroundColor: 'white', gap: 10}}>
        <AdsButton />
        <PostAdButton
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <ChatButton
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <MyAccountButton
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <CustomerServiceButton />
        <GeneralInfoButton />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: 'white',
          gap: 5,
          flexDirection: 'row',
        }}>
        <InstagramButton />
        <FacebookButton />
        <YoutubeButton />
        <LinkedinButton />
        <GooglePlayButton />
      </View>
      {loggedIn ? (
        <View
          style={{
            paddingHorizontal: 10,
            flex: 1,
            justifyContent: 'center',
          }}>
          <LogoutButton />
        </View>
      ) : (
        ''
      )}

      <NavigationContainer independent>
        <AuthModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </NavigationContainer>
    </View>
  );
};

export default CustomDrawer;
