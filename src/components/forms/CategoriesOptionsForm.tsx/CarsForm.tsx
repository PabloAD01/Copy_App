import React from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  handleLocations: () => void;
};

const CarsForm = ({handleLocations}: Props) => {
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
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>Marca</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Seleccione marca del vehículo
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
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
            Transimisión (cambio)
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Seleccione transimisión del vehículo
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
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
            Combustible
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Tipo de combustible del vehículo
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
          <Text style={{color: '#FF842C', fontWeight: 'bold'}}>
            Tipo de vehículo
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Seleccione clase del vehículo
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
    </>
  );
};

export default CarsForm;
