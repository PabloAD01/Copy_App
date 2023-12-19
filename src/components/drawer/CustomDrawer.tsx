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

import AuthModal from '../modals/AuthModal';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../../providers/AuthProvider';
import LogoutButton from '../buttons/options/LogoutButton';
import SocialsButtons from '../buttons/socials/SocialsButtons';
import EnterAccountButton from '../buttons/options/EnterAccountButton';
import OptionsButton from '../buttons/options/OptionsButton';

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
          <EnterAccountButton setModalVisible={setModalVisible} />
        )}
      </View>
      <View style={{paddingHorizontal: 10, backgroundColor: 'white', gap: 10}}>
        <OptionsButton setModalVisible={setModalVisible} />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: 'white',
          gap: 5,
          flexDirection: 'row',
        }}>
        <SocialsButtons />
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
