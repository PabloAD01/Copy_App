import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

type Props = {};

const ChatButton = (props: Props) => {
  return (
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
  );
};

export default ChatButton;
