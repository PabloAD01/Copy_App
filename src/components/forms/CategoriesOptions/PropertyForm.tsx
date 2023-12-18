import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';

type Props = {};

const PropertyForm = (props: Props) => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: 'white',
          position: 'relative',
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => {}}>
        <View style={{gap: 4, flex: 1}}>
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
            Tipo de inmueble
          </Text>
          <RNPickerSelect
            placeholder={{}}
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
          />
        </View>
        <AntDesign name="right" size={14} color="black" />
      </TouchableOpacity>
    </>
  );
};

export default PropertyForm;
