/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
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
import PostAd from './src/screens/PostAdScreen';
import Locations from './src/screens/LocationsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
import {enableLatestRenderer} from 'react-native-maps';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/components/drawer/CustomDrawer';
import AuthProvider from './src/providers/AuthProvider';
import GlobalProvider from './src/providers/GlobalProvider';
import {HeaderBackButton} from '@react-navigation/elements';

enableLatestRenderer();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type RootStackParamList = {
  Home: undefined;
  Product: {product: IProduct};
  Map: {product: IProduct};
  PostAd: undefined;
  Locations: {setLocation: (region: string) => void};
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
const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <AuthProvider>
      <GlobalProvider>
        <NavigationContainer>
          <SafeAreaView style={backgroundStyle}>
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                swipeEnabled: false,
              }}
              drawerContent={props => <CustomDrawer {...props} />}>
              <Drawer.Screen
                name="Home"
                options={{
                  title: 'Avisos',
                  headerStyle: {
                    backgroundColor: '#FF842C',
                  },
                  headerTintColor: '#fff',
                }}
                component={HomeScreen}
              />
              <Drawer.Screen
                name="Product"
                options={{headerShown: false}}
                component={ProductScreen}
              />
              <Drawer.Screen
                name="Map"
                options={{headerShown: false}}
                component={MapScreen}
              />
              <Drawer.Screen
                name="PostAd"
                options={{
                  title: 'Publicar aviso',
                  headerStyle: {
                    backgroundColor: '#FF842C',
                  },
                  headerTintColor: '#fff',
                }}
                component={PostAd}
              />
              <Drawer.Screen
                name="Locations"
                options={({navigation}) => ({
                  title: 'Ubicación',
                  headerStyle: {
                    backgroundColor: '#FF842C',
                  },
                  headerTintColor: '#fff',
                  headerLeft: () => (
                    <HeaderBackButton
                      onPress={() => {
                        navigation.navigate('PostAd');
                      }}
                      tintColor="#fff"
                    />
                  ),
                })}
                component={Locations}
              />
            </Drawer.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </GlobalProvider>
    </AuthProvider>
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
