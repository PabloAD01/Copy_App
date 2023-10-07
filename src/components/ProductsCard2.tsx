import React from 'react';
import {Image, Text, View} from 'react-native';
import {IProduct} from '../screens/HomeScreen';

type Props = {
  data: IProduct;
};

const ProductsCard2 = ({data}: Props) => {
  return (
    <View
      style={{
        height: 150,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'black',
      }}>
      <Text
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'red',
          borderWidth: 1,
          borderColor: 'black',
        }}></Text>
    </View>
  );
};

export default ProductsCard2;
