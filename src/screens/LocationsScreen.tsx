import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {regionesDeChile} from '../constants/Regions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {StackView} from '@react-navigation/stack';

type Props = {};

const Locations = (props: Props) => {
  const width = useSharedValue(100);

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
      {regionesDeChile.map(region => (
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
          <Text key={region.region} style={{fontWeight: '600'}}>
            {region.region}
          </Text>

          <AntDesign name="right" size={14} color="black" />
        </TouchableOpacity>
      ))}
    </Animated.ScrollView>
  );
};

export default Locations;
