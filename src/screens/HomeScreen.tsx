import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ProductsCard from '../components/ProductsCard';
import ProductsCard2 from '../components/ProductsCard2';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '../../App';
import {Api, ApiP} from '../../Api';
type Props = {};

export interface IProduct {
  id: number;
  description: string;
  price: string;
  uploaded?: string;
  location?: string;
  like?: boolean;
  info?: {
    [key: string]: any;
  };
}

const HomeScreen = (props: Props) => {

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
   
  


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(Api);
        const data = await response.json();
        setProducts(data.products);
      } catch (error:any) {
        console.error('Error fetching products:', error.message);
      }
      try {
        const response = await fetch(ApiP);
        const data = await response.json();
        setProducts2(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();



  }, []);

  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handlePress = (products : IProduct) => {
    navigation.navigate('Product', {product: products});
    
  }


  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <TouchableOpacity>
            <Icon name="bars" size={20} color={'#fff'} />
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '600'}}>
            Avisos
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
          <TouchableOpacity>
            <Icon name="bell-o" size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon3 name="magnify" size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon2 name="dots-three-vertical" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.contentContainer} removeClippedSubviews={true}>
        <FlatList
          style={{}}
          horizontal={true}
          data={products2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 10}}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          /* keyExtractor={item => item.id.toString()} */
          renderItem={({item}) => <ProductsCard2 data={item} onPress={handlePress} />}
        />
        {products.map((item, index) => {
          return (
            <View  style={{marginBottom: 10}}>
              <ProductsCard data={item} onPress={handlePress}/>
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
    backgroundColor: '#FF842C',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  contentContainer: {
    height: '92%',
    paddingHorizontal: 3,
  },
});

export default HomeScreen;
