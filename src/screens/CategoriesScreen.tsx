import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, LogBox} from 'react-native';
import {categorias} from '../constants/Categories';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type Props = {};

const CategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [expandedRegions, setExpandedRegions] = useState<string[]>([]);

  const toggleRegion = (region: string) => {
    if (expandedRegions.includes(region)) {
      setExpandedRegions(expandedRegions.filter(r => r !== region));
    } else {
      setExpandedRegions([...expandedRegions, region]);
    }
  };

  const handleRegion = (comuna: string, region: string) => {
    route.params.setCategory(comuna);
    toggleRegion(region);
    navigation.navigate('PostAd');
  };

  return (
    <Animated.ScrollView>
      {categorias.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => toggleRegion(item.name)}
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', color: 'black'}}>{item.name}</Text>
            <AntDesign
              name={expandedRegions.includes(item.name) ? 'up' : 'right'}
              size={14}
              color="black"
            />
          </TouchableOpacity>
          {expandedRegions.includes(item.name) &&
            item.type?.map((comuna, comunaIndex) => (
              <TouchableOpacity
                key={comunaIndex}
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => handleRegion(comuna, item.name)}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: '#6A6A6A',
                    borderBottomWidth: 1,
                    width: '100%',
                    borderColor: '#e5e3e3',
                  }}>
                  {comuna}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default CategoriesScreen;
