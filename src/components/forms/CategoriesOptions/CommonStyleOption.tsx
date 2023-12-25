import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';

type Props = {};

const CommonStyleOption = (props: Props) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        flex: 1,
        height: 70,
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <Text
        style={{
          color: '#FF842C',
          fontWeight: 'bold',
          position: 'absolute',
          top: 14,
          left: 14,
        }}>
        Tipo de inmueble
      </Text>
      <RNPickerSelect
        style={{
          inputAndroid: {
            height: '100%',
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 14,
            marginTop: 4,
          },
          inputIOS: {
            height: '100%',
            borderRadius: 8,
            color: 'black',
            fontWeight: 'bold',
            paddingHorizontal: 14,
          },
        }}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: 'Seleccione tipo de inmueble',
          value: null,
        }}
        onValueChange={value => console.log(value)}
        items={[{label: 'Nuevo', value: 'nuevo'}]}
      />
      <AntDesign
        style={{position: 'absolute', right: 16, top: 30}}
        name="right"
        size={14}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default CommonStyleOption;
