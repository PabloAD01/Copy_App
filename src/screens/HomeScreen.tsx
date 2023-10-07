import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ProductsCard from '../components/ProductsCard';
import ProductsCard2 from '../components/ProductsCard2';
import {ScrollView} from 'react-native';

type Props = {};

export interface IProduct {
  id: number;
  name: string;
  price: string;
}

const products: IProduct[] = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10.000',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20.000',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$30.000',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$40.000',
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$50.000',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$60.000',
  },
  {
    id: 7,
    name: 'Product 7',
    price: '$70.000',
  },
  {
    id: 8,
    name: 'Product 8',
    price: '$80.000',
  },
  {
    id: 9,
    name: 'Product 9',
    price: '$90.000',
  },
  {
    id: 10,
    name: 'Product 10',
    price: '$100.000',
  },
];

const products2: IProduct[] = [
  {
    id: 1,
    name: 'Product 1',
    price: '$10.000',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$20.000',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$30.000',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$40.000',
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$50.000',
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$60.000',
  },
  {
    id: 7,
    name: 'Product 7',
    price: '$70.000',
  },
  {
    id: 8,
    name: 'Product 8',
    price: '$80.000',
  },
  {
    id: 9,
    name: 'Product 9',
    price: '$90.000',
  },
  {
    id: 10,
    name: 'Product 10',
    price: '$100.000',
  },
];

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}></View>
      <ScrollView style={styles.contentContainer}
      removeClippedSubviews={true}
      >
      <FlatList
        style={{}}
        horizontal={true}
        data={products2}
        contentContainerStyle={{paddingVertical: 10}}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ProductsCard2 data={item} />
        )}
      /> 
        {products.map((item, index) => {
          return (
            <View key={item.id} style={{marginBottom: 10}}>
              <ProductsCard data={item} />
            </View>
          );
        })}
      </ScrollView>
      {/* <FlatList
        style={styles.contentContainer}
        data={products}
        scrollEnabled={true}
        contentContainerStyle={{paddingVertical: 10}}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        showsVerticalScrollIndicator={true}
        renderItem={({item}) => (

        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    height: '8%',
    borderColor: 'black',
    backgroundColor: '#FF7C07',
  },
  contentContainer: {
    height: '92%',

    borderColor: 'black',
    paddingHorizontal: 5,
  },
});

export default HomeScreen;
