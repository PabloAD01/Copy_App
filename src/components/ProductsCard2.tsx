import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  data: IProduct;
  onPress: (item: IProduct) => void;
};

const ProductsCard2 = ({data, onPress}: Props) => {

  const handleOnPress = () => {
    onPress(data);
  }
  
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'column',
        padding: 2,
        backgroundColor: '#2CBCDF',
        width: 200
      }}
      onPress={handleOnPress}>
      <Image
        source={{
          uri: 'https://dummyimage.com/300',
        }}
        style={{
          height: 100,
          width: '100%',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal:10}}>
        <Icon name="house" size={20} color={'#fff'} />
        </View>
        <View
          style={{width: 1, backgroundColor: '#5CD3EB', height: '100%'}}>
          </View>
        <View style={{flex:1, width: '100%',paddingHorizontal:10}}>
          <Text style={{color: '#fff'}} numberOfLines={1}>{data.description}</Text>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>{data.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCard2;
