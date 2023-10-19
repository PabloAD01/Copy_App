/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import axios from 'axios';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen, {IProduct} from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import MapScreen from './src/screens/MapScreen';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type RootStackParamList = {
  Home: undefined;
  Product: {product: IProduct};
  Map: {product: IProduct};
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Product'
>;
export type ProductScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Map'
>;
export type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;
export type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Product"
            options={{headerShown: false}}
            component={ProductScreen}
          />
          <Stack.Screen
            name="Map"
            options={{headerShown: false}}
            component={MapScreen}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
