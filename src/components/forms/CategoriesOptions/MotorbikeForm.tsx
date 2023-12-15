import React from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  handleLocations: () => void;
  type: boolean;
};

const MotorbikeForm = ({handleLocations, type}: Props) => {
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
        onPress={handleLocations}>
        <View>
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>Año</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Seleccione año del vehículo
          </Text>
        </View>
        <AntDesign name="right" size={14} color="black" />
      </TouchableOpacity>

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
        onPress={handleLocations}>
        <View>
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>Cilindrada</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Seleccione cilindrada del vehículo
          </Text>
        </View>
        <AntDesign name="right" size={14} color="black" />
      </TouchableOpacity>

      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          position: 'relative',
          padding: 16,
        }}>
        <Text style={{color: 'gray'}}>Kilómetros</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderRadius: 8,
            color: 'black',
          }}
          keyboardType="numeric"
          onChangeText={() => {}}
        />
      </View>
      {type === true && (
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            padding: 16,
          }}>
          <Text style={{color: 'gray'}}>Patente</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              paddingHorizontal: 10,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderRadius: 8,
              color: 'black',
              textTransform: 'uppercase',
            }}
            maxLength={6}
            onChangeText={() => {}}
          />
        </View>
      )}
    </>
  );
};

export default MotorbikeForm;
