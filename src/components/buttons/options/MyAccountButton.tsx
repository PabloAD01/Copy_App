import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {};

const MyAccountButton = (props: Props) => {
  return (
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
  );
};

export default MyAccountButton;
