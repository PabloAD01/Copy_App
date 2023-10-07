import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../screens/HomeScreen';

type Props = {
  data: IProduct;
};

const ProductsCard2 = ({data}: Props) => {
  return (
    <TouchableOpacity
      style={{
        height: 150,
        flexDirection: 'column',
        padding: 2,
        backgroundColor: '#2CBCDF',
      }}>
      <Image
        source={{
          uri: 'https://dummyimage.com/300',
        }}
        style={{
          height: 100,
          width: 190,
        }}/>
        <View>

        </View>
    </TouchableOpacity>
  );
};

export default ProductsCard2;
