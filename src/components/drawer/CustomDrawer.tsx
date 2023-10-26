import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React, {useState} from 'react';
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
import LoginModal from '../modals/LoginModal';

type Props = {};

const CustomDrawer = (props: DrawerContentComponentProps) => {
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
        <LoginModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
      <View style={{paddingHorizontal: 10, backgroundColor: 'white', gap: 10}}>
        <AdsButton />
        <PostAdButton />
        <ChatButton />
        <MyAccountButton />
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
    </View>
  );
};

export default CustomDrawer;
