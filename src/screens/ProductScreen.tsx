import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  Dimensions,
} from 'react-native';
import {ProductScreenNavigationProp, ProductScreenRouteProp} from '../../App';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Entypo';
import LikeButton from '../components/LikeButton';
import {ProductInfoDictionary} from '../dictionaries/ProductInfoDictionary';
import MapView from 'react-native-maps';
import Carousel from 'react-native-reanimated-carousel';

type Props = {};

const {width} = Dimensions.get('window');

const ProductScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const {product} = route.params;

  const navigation = useNavigation<ProductScreenNavigationProp>();
  const handlePress = () => {
    navigation.navigate('Map', {product: product});
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <TouchableOpacity onPress={handleBack}>
            <Icon name="arrowleft" size={20} color={'#fff'} />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
            Avisos
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <LikeButton like={false} onPress={function (): void {}} />
          <TouchableOpacity>
            <Icon2 name="share" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Carousel
          width={width}
          height={300}
          autoPlay={false}
          data={product.images}
          scrollAnimationDuration={1000}
          renderItem={({index}) => (
            <Image
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
              }}
              source={{uri: product.images[index]}}
            />
          )}
        />
        <View
          style={{
            height: 130,
            width: '100%',
            backgroundColor: '#F8F8F8',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{color: '#838383', fontSize: 15, fontWeight: '400'}}>
            {product.createdAt}
          </Text>
          <Text style={{color: '#555555', fontSize: 20, fontWeight: '300'}}>
            {product.title}
          </Text>
          <Text style={{color: '#F48631', fontSize: 20, fontWeight: '600'}}>
            ${product.price}
          </Text>
        </View>
        {product?.info && (
          <View style={{paddingHorizontal: 10, backgroundColor: 'white'}}>
            {Object.keys(product?.info).map((key, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 2,
                    borderBottomColor: '#F8F8F8',
                    paddingVertical: 10,
                    flex: 1,
                    gap: 10,
                  }}>
                  <Text
                    style={{color: '#555555', fontSize: 15, fontWeight: '400'}}>
                    {ProductInfoDictionary[key]}
                  </Text>
                  <Text
                    style={
                      key === 'descripcion'
                        ? {
                            color: '#555555',
                            fontSize: 15,
                            fontWeight: '400',
                            flex: 1,
                            textAlign: 'left',
                          }
                        : {
                            color: '#555555',
                            fontSize: 15,
                            fontWeight: '400',
                            flex: 1,
                            textAlign: 'right',
                          }
                    }>
                    {product?.info?.[key] || ''}
                  </Text>
                </View>
              );
            })}
          </View>
        )}
        {product?.coords?.lat && product?.coords?.long ? (
          <View
            style={{
              paddingHorizontal: 5,
              backgroundColor: 'white',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MapView
              style={{width: '100%', height: 120}}
              initialRegion={{
                latitude: product.coords.lat,
                longitude: product.coords.long,
                latitudeDelta: product.coords.latd,
                longitudeDelta: product.coords.longd,
              }}
              pitchEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
              zoomEnabled={false}
            />
            <TouchableOpacity
              onPress={handlePress}
              style={{
                position: 'absolute',
                backgroundColor: '#F48631',
                padding: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                Ver ubicación
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          ''
        )}

        <View style={{paddingHorizontal: 5, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 2,
              borderBottomColor: '#F8F8F8',
              gap: 10,
              paddingVertical: 10,
            }}>
            <Image
              source={{uri: 'https://dummyimage.com/300'}}
              style={{height: 50, width: 50, borderRadius: 50}}
            />
            <View>
              <Text style={{color: '#555555', fontSize: 15, fontWeight: '600'}}>
                {product.owner}
              </Text>
              <Text style={{color: '#555555', fontSize: 15, fontWeight: '300'}}>
                {`Usuario desde ${product.createdAt}`}
              </Text>
            </View>
          </View>
          <Text style={{color: '#555555', fontSize: 15, fontWeight: '300'}}>
            {`${product.location}`}
          </Text>
        </View>
      </ScrollView>
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
    paddingHorizontal: 3,
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

export default memo(ProductScreen);
