import React from 'react';
import {Image, Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {IProduct} from '../screens/HomeScreen';

type Props = {
  data: IProduct;
};



const ProductsCard = ({data}: Props) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={{
          uri: "https://dummyimage.com/300"
        }}
        style={{
          height: 130,
          width: 130,
        }}/>
      <View style={styles.cardContent}>
        <View>
          <Text>{data.name}</Text>
        </View>
        <View>
          <Text>{data.price}</Text>
        </View>
        </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  cardContainer:{ 
    flexDirection: 'row',
    backgroundColor: '#F3EFEF',
    elevation: 5,
  },
  cardContent: {
  width: '100%',
  flex:1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 10
  }
})

export default ProductsCard;
