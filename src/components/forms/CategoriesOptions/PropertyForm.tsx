import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  category: string;
};

const properties = [
  {
    label: 'Departamento',
    value: 'Departamento',
  },
  {
    label: 'Casa',
    value: 'Casa',
  },
  {
    label: 'Oficina',
    value: 'Oficina',
  },
  {
    label: 'Comercial e industrial',
    value: 'Comercial e industrial',
  },
  {
    label: 'Terreno',
    value: 'Terreno',
  },
  {
    label: 'Estacionamiento, bodega u otro',
    value: 'Estacionamiento, bodega u otro',
  },
];

const PropertyForm = ({category}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [propertyType, setPropertyType] = useState('');

  return (
    <React.Fragment>
      <TouchableOpacity
        style={{
          width: '100%',
          flex: 1,
          height: 80,
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <Text
          style={{
            color: '#FF842C',
            fontWeight: 'bold',
            position: 'absolute',
            top: 10,
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
          onValueChange={value => setPropertyType(value)}
          items={properties}
        />
        <AntDesign
          style={{position: 'absolute', right: 20, top: 30}}
          name="right"
          size={14}
          color="black"
        />
      </TouchableOpacity>
      {(propertyType === 'Departamento' || propertyType === 'Casa') && (
        <React.Fragment>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>
              Superficie construida m² (Opcional)
            </Text>
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
              onChangeText={text => console.log(text)}
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Superficie total m² (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Año de construcción (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Estacionamiento (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
          </View>

          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Gastos comunes (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
            {category === 'Vendo' && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 16,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Propiedad nueva</Text>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
            )}
          </View>
        </React.Fragment>
      )}
      {propertyType === 'Oficina' && (
        <>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Superficie útil m² (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Superficie total m² (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
          </View>

          <View
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>Estacionamiento (Opcional)</Text>
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
              onChangeText={text => console.log(text)}
            />
            {category === 'Vendo' && (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 16,
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Propiedad nueva</Text>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
              </View>
            )}
          </View>
        </>
      )}
    </React.Fragment>
  );
};

export default PropertyForm;
