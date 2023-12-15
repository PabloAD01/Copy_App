import React from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  handleLocations: () => void;
  category: string;
};

const FashionForm = ({handleLocations, category}: Props) => {
  return (
    <>
      {(category === 'Moda y vestuario' ||
        category === 'Bolsos, bisutería y accesorios' ||
        category === 'Calzado') && (
        <React.Fragment>
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
                Nuevo / Usado
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Seleccione estado del artículo
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
              <Text style={{color: '#FF842C', fontWeight: 'bold'}}>Género</Text>
              <Text style={{color: 'black', fontWeight: 'bold'}}></Text>
            </View>
            <AntDesign name="right" size={14} color="black" />
          </TouchableOpacity>
          {category === 'Calzado' && (
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
                  Tipo de calzado
                </Text>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Seleccione tipo de calzado
                </Text>
              </View>
              <AntDesign name="right" size={14} color="black" />
            </TouchableOpacity>
          )}
        </React.Fragment>
      )}
      {category === 'Salud y belleza' && (
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
            <Text style={{color: '#FF842C', fontWeight: 'bold'}}>Género</Text>
            <Text style={{color: 'black', fontWeight: 'bold'}}></Text>
          </View>
          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default FashionForm;
