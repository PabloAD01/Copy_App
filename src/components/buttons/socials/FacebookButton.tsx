import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};

const FacebookButton = (props: Props) => {
  return (
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
  );
};

export default FacebookButton;
