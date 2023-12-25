import React, {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import {fuelTypes} from '../../../constants/FuelType';
import {years} from '../../../constants/Year';
import {cars} from '../../../constants/Cars';

type Props = {
  handleLocations: () => void;
  type: boolean;
};

const CarsForm = ({handleLocations, type}: Props) => {
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState('');

  return (
    <>
      {cars.map(car => (
        <TouchableOpacity
          key={car.label}
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
            {car.label}
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
              label: 'Seleccione año del vehículo',
              value: null,
            }}
            onValueChange={value => console.log(value)}
            items={car.value}
          />
          <AntDesign
            style={{position: 'absolute', right: 16, top: 30}}
            name="right"
            size={14}
            color="black"
          />
        </TouchableOpacity>
      ))}
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

export default CarsForm;
