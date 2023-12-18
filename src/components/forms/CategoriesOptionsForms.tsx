import React, {useState} from 'react';
import CarsForm from './CategoriesOptions/CarsForm';
import FashionForm from './CategoriesOptions/FashionForm';
import LargeVehiclesForm from './CategoriesOptions/LargeVehiclesForm';
import MotorbikeForm from './CategoriesOptions/MotorbikeForm';
import {View, TouchableOpacity, Text} from 'react-native';
import KidsForm from './CategoriesOptions/KidsForm';
import PropertyForm from './CategoriesOptions/PropertyForm';

type Props = {
  handleLocations: () => void;
  category: string;
  setType: React.Dispatch<React.SetStateAction<boolean>>;
  type: boolean;
};

const CategoriesOptionsForms = ({
  handleLocations,
  category,
  setType,
  type,
}: Props) => {
  return (
    <>
      {category &&
        (category === 'Autos, camionetas y 4x4' ||
          category === 'Motos' ||
          category === 'Buses, camiones, furgones') && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              gap: 10,
              paddingVertical: 24,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                gap: 2,
              }}>
              <TouchableOpacity
                style={
                  type
                    ? {
                        paddingVertical: 8,
                        backgroundColor: '#FF6205',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                    : {
                        paddingVertical: 8,
                        backgroundColor: '#B6B6B6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                }
                onPress={() => setType(true)}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}>
                  Vendo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  type
                    ? {
                        paddingVertical: 8,
                        backgroundColor: '#B6B6B6',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                    : {
                        paddingVertical: 8,
                        backgroundColor: '#FF6205',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                      }
                }
                onPress={() => setType(false)}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    textTransform: 'uppercase',
                  }}>
                  Busco
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      {(category === 'Vendo' ||
        category === 'Arriendo' ||
        category === 'Arriendo de temporada') && <PropertyForm />}
      {category === 'Autos, camionetas y 4x4' && (
        <CarsForm handleLocations={handleLocations} type={type} />
      )}
      {category === 'Motos' && (
        <MotorbikeForm handleLocations={handleLocations} type={type} />
      )}
      {category === 'Buses, camiones, furgones' && (
        <LargeVehiclesForm handleLocations={handleLocations} type={type} />
      )}

      <FashionForm handleLocations={handleLocations} category={category} />
      {(category === 'Vestuario futura mamá y niños' ||
        category === 'Juguetes' ||
        category === 'Coches y artículos inftantiles') && (
        <KidsForm handleLocations={handleLocations} />
      )}
    </>
  );
};

export default CategoriesOptionsForms;
