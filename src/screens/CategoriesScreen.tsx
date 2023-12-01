import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {regionesDeChile} from '../constants/Regions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';

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
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: 'white',
          position: 'relative',
          padding: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: '600', color: 'black'}}>Todo Chile</Text>
        <AntDesign name="right" size={14} color="black" />
      </TouchableOpacity>
      {regionesDeChile.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => toggleRegion(item.region)}
            style={{
              width: '100%',
              backgroundColor: 'white',
              position: 'relative',
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', color: 'black'}}>
              {item.region}
            </Text>
            <AntDesign
              name={expandedRegions.includes(item.region) ? 'up' : 'right'}
              size={14}
              color="black"
            />
          </TouchableOpacity>
          {expandedRegions.includes(item.region) &&
            item.comunas.map((comuna, comunaIndex) => (
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
                onPress={() => handleRegion(comuna, item.region)}>
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
