import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type Props = {
  setModalVisible: (modalVisible: boolean) => void;
};

const EnterAccountButton = ({setModalVisible}: Props) => {
  return (
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
  );
};

export default EnterAccountButton;
