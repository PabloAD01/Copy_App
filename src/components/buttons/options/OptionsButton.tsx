import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import {HomeScreenNavigationProp} from '../../../../App';
import {AuthContext} from '../../../providers/AuthProvider';

type Props = {
  setModalVisible: (modalVisible: boolean) => void;
};

const options = [
  {
    name: 'Avisos',
    content: (
      <Feather name="box" size={20} color={'#6A6A6A'} style={{flex: 1}} />
    ),
    screen: 'Home',
  },
  {
    name: 'Publicar aviso',
    content: (
      <FontAwesome name="edit" size={20} color={'#6A6A6A'} style={{flex: 1}} />
    ),
    screen: 'PostAd',
  },
  {
    name: 'Chat',
    content: (
      <Entypo name="chat" size={20} color={'#6A6A6A'} style={{flex: 1}} />
    ),
    screen: 'Chat',
  },
  {
    name: 'Mi cuenta',
    content: (
      <FontAwesome
        name="user-circle-o"
        size={20}
        color={'#6A6A6A'}
        style={{flex: 1}}
      />
    ),
    screen: 'MyAccount',
  },
  {
    name: 'Servicio al cliente',
    content: (
      <Octicons
        name="shield-check"
        size={20}
        color={'#6A6A6A'}
        style={{flex: 1}}
      />
    ),
    screen: 'CustomerService',
  },
  {
    name: 'Información general',
    content: (
      <Octicons name="info" size={20} color={'#6A6A6A'} style={{flex: 1}} />
    ),
    screen: 'GeneralInfo',
  },
];

const OptionsButton = ({setModalVisible}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {loggedIn} = useContext(AuthContext);

  const handlePress = (option: any) => {
    if (option === 'Home') {
      navigation.navigate(option);
      return;
    } else {
      if (!loggedIn) {
        setModalVisible(true);
        return;
      }

      navigation.navigate(option);
    }
  };

  return options.map(option => (
    <TouchableOpacity
      key={option.name}
      style={{
        borderWidth: 1,
        borderColor: '#e5e3e3',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
      }}
      onPress={() => handlePress(option.screen)}>
      {option.content}
      <Text
        style={{
          color: '#6A6A6A',
          fontSize: 15,
          fontWeight: '400',
          flex: 4,
        }}>
        {option.name}
      </Text>
    </TouchableOpacity>
  ));
};

export default OptionsButton;
