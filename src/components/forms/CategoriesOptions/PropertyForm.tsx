import React, {useRef, useState} from 'react';
import {TouchableOpacity, View, Text, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  category: string;
};

type PropertyInfo = {
  Departamento: string[];
  Casa: string[];
  Oficina: string[];
  Comercial: string[];
  Terreno: string[];
  Otros: string[];
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
    value: 'Comercial',
  },
  {
    label: 'Terreno',
    value: 'Terreno',
  },
  {
    label: 'Estacionamiento, bodega u otro',
    value: 'Otros',
  },
];

const propertiesInfo: PropertyInfo | any = {
  Departamento: [
    'Superficie útil m²',
    'Superficie total m²',
    'Año construcción',
    'Estacionamiento',
    'Gastos comunes',
  ],
  Casa: [
    'Superficie construida m²',
    'Superficie total m²',
    'Año construcción',
    'Estacionamiento',
    'Gastos comunes',
  ],
  Oficina: ['Superficie útil m²', 'Superficie total m²', 'Estacionamiento'],
  Comercial: [
    'Superficie construida m²',
    'Superficie total m²',
    'Estacionamiento',
  ],
  Terreno: ['Superficie total m²', 'Gastos comunes', 'Hectáreas de riego'],
  Otros: ['Superficie total m²', 'Estacionamiento', 'Gastos comunes'],
};

const PropertyForm = ({category}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [propertyType, setPropertyType] = useState('');

  return (
    <React.Fragment>
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
          onValueChange={value => setPropertyType(value)}
          items={properties}
        />
        <AntDesign
          style={{position: 'absolute', right: 16, top: 30}}
          name="right"
          size={14}
          color="black"
        />
      </TouchableOpacity>
      {propertyType &&
        propertiesInfo[propertyType] &&
        propertiesInfo[propertyType].map((info: string, index: number) => (
          <View
            key={index}
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
            }}>
            <Text style={{color: 'gray'}}>{info} (Opcional)</Text>
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
            {index === propertiesInfo[propertyType].length - 1 &&
              propertyType !== 'Terreno' &&
              propertyType !== 'Otros' &&
              category === 'Vendo' && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'gray'}}>Propiedad nueva</Text>
                  <CheckBox
                    value={toggleCheckBox}
                    onValueChange={setToggleCheckBox}
                  />
                </View>
              )}
          </View>
        ))}
    </React.Fragment>
  );
};

export default PropertyForm;
