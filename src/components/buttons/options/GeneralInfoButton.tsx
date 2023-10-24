import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

type Props = {};

const GeneralInfoButton = (props: Props) => {
  return (
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
  );
};

export default GeneralInfoButton;
