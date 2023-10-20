import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import {MapScreenRouteProp} from '../../App';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Entypo';
import LikeButton from '../components/LikeButton';
import {ProductInfoDictionary} from '../dictionaries/ProductInfoDictionary';
import MapView, {Circle, Marker} from 'react-native-maps';

type Props = {};

const MapScreen = () => {
  const route = useRoute<MapScreenRouteProp>();
  const {product} = route.params;
  console.log('Lat', product.coords?.lat);
  console.log('Long', product.coords?.long);
  console.log('Latd', product.coords?.latd);
  console.log('Longd', product.coords?.longd);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <TouchableOpacity>
            <Icon name="arrowleft" size={20} color={'#fff'} />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
            {`Location`}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={{
            paddingHorizontal: 5,
            backgroundColor: 'white',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {product.coords && (
            <MapView
              style={{width: '100%', height: '100%'}}
              initialRegion={{
                latitude: product.coords.lat,
                longitude: product.coords.long,
                latitudeDelta: product.coords.latd,
                longitudeDelta: product.coords.longd,
              }}>
              <Circle
                center={{
                  latitude: -53.1309334,
                  longitude: -70.8755107,
                }}
                radius={4000}
                strokeColor={'rgba(255, 0, 0, 1)'}
                fillColor={'red'}
              />
            </MapView>
          )}
        </View>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 50,
            borderRadius: 50,
            backgroundColor: '#32589F',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}
          onPress={() => Linking.openURL(`tel:${214636}`)}>
          <Icon3 name="phone" size={15} color={'white'} />
          <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
            Teléfono
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            height: 50,
            borderRadius: 50,
            backgroundColor: '#FF842C',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <Icon4 name="chat" size={15} color={'white'} />
          <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    height: '8%',
    backgroundColor: '#FF842C',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  contentContainer: {
    height: '81%',
    flexDirection: 'column',
  },
  footerContainer: {
    height: '11%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default MapScreen;
