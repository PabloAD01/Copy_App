import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ProductsCard from '../components/ProductsCard';
import ProductsCard2 from '../components/ProductsCard2';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../App';
import {Api} from '../../Api';
type Props = {};

export interface IProduct {
  owner: string;
  _id: string;
  title: string;
  description: string;
  price: string;
  updatedAt?: string;
  createdAt?: string;
  createdBy?: string;
  location?: string;
  images: string[];
  coords?: {
    long: number;
    lat: number;
    longd: number;
    latd: number;
  };
  like?: boolean;
  info?: {
    [key: string]: any;
  };
}

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [products2, setProducts2] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(Api + '/products');
        const data = await response.json();
        const products = data.products.map((product: {[key: string]: any}) => ({
          ...product,
          images: product.imageUrls,
          price: product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
        }));
        setProducts(prevProducts => [...prevProducts, ...products]);
      } catch (error: any) {
        console.error('Error fetching products:', error.message);
      }
      try {
        const response = await fetch(Api + '/premium_products');
        const data = await response.json();
        setProducts2(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = (products: IProduct) => {
    navigation.navigate('Product', {product: products});
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.contentContainer} removeClippedSubviews={true}>
        <FlatList
          style={{}}
          horizontal={true}
          data={products2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          keyExtractor={item => item['_id']}
          renderItem={({item}) => (
            <ProductsCard2 data={item} onPress={handlePress} />
          )}
        />
        {products.map((item, index) => {
          return (
            <View key={item['_id']} style={{marginBottom: 10}}>
              <ProductsCard data={item} onPress={handlePress} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 3,
  },
});

export default HomeScreen;
