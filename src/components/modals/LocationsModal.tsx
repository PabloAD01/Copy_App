import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {regionesDeChile} from '../../constants/Regions';

export interface Region {
  region: string;
  comunas: string[];
}

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  setSelectedLocation: (region: Region) => void;
};

const LocationsModal = ({
  isVisible,
  closeModal,
  setSelectedLocation,
}: Props) => {
  const handleRegionSelect = (region: Region) => {
    setSelectedLocation(region);
    closeModal();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent
      onRequestClose={closeModal}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            width: '90%',
            borderRadius: 8,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
            Selecciona una región:
          </Text>
          <FlatList
            data={regionesDeChile}
            keyExtractor={item => item.region}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleRegionSelect(item)}>
                <Text style={{fontSize: 16, marginBottom: 10}}>
                  {item.region}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#0977B6',
              padding: 10,
              alignItems: 'center', // Agregadoi
              borderRadius: 8,
            }}
            onPress={closeModal}>
            <Text style={{color: 'white', paddingVertical: 5}}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LocationsModal;
