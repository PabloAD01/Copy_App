import {DrawerContentComponentProps} from '@react-navigation/drawer';
import React from 'react';
import {View, Text} from 'react-native';

type Props = {};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View>
      <Text style={{color: 'red'}}>doajdao</Text>
    </View>
  );
};

export default CustomDrawer;
