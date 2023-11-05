import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {regionesDeChile} from '../constants/Regions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {string} from 'yup';
import {GlobalContext} from '../providers/GlobalProvider';

type Props = {};

const Locations = ({navigation}: {navigation: any}) => {
  const [expandedRegions, setExpandedRegions] = useState<string[]>([]);

  const {setRegion, region} = useContext(GlobalContext);

  const toggleRegion = (region: string) => {
    if (expandedRegions.includes(region)) {
      setExpandedRegions(expandedRegions.filter(r => r !== region));
    } else {
      setExpandedRegions([...expandedRegions, region]);
    }
  };

  const handleRegion = (comuna: string, region: string) => {
    setRegion(comuna);
    console.log(comuna);
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
        <Text style={{fontWeight: '600'}}>Todo Chile</Text>
        <AntDesign name="right" size={14} color="black" />
      </TouchableOpacity>
      {regionesDeChile.map((item, index) => (
        <React.Fragment key={index}>
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
            <Text style={{fontWeight: '600'}}>{item.region}</Text>
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
                <Text style={{fontWeight: '600'}}>{comuna}</Text>
              </TouchableOpacity>
            ))}
        </React.Fragment>
      ))}
    </Animated.ScrollView>
  );
};

export default Locations;
