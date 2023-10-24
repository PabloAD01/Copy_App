import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type Props = {};

const AdsButton = (props: Props) => {
  return (
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
  );
};

export default AdsButton;
