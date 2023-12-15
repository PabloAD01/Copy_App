import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  handleLocations: () => void;
};

const KidsForm = ({handleLocations}: Props) => {
  return (
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
  );
};

export default KidsForm;
