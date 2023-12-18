import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { HomeScreenNavigationProp } from '../../../../App';
import { AuthContext } from '../../../providers/AuthProvider';

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const ChatButton = ({modalVisible, setModalVisible}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {loggedIn} = useContext(AuthContext);

  const handlePress = () => {
    if (!loggedIn) {
      setModalVisible(true);
      return;
    }

    navigation.navigate('MyAccount');
  };
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: '#e5e3e3',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
      }}
      onPress={handlePress}>
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
  );
};

export default ChatButton;
