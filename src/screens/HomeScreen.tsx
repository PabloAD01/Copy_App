import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ProductsCard from '../components/ProductsCard';
import ProductsCard2 from '../components/ProductsCard2';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {};

export interface IProduct {
  id: number;
  description: string;
  price: string;
  uploaded?: string;
  location?: string;
  like?: boolean;
}

const products: IProduct[] = [
  {
    id: 1,
    description: 'Product 1',
    price: '$10.000',
    uploaded: '2023-10-07',
    location: 'Santiago, Chile',
    like: false,
  },
  {
    id: 2,
    description: 'Product 2',
    price: '$20.000',
    uploaded: '2023-10-07',
    location: 'Valparaíso, Chile',
    like: false,
  },
  {
    id: 3,
    description: 'Product 3',
    price: '$30.000',
    uploaded: '2023-10-07',
    location: 'Concepción, Chile',
    like: false,
  },
  {
    id: 4,
    description: 'Product 4',
    price: '$40.000',
    uploaded: '2023-10-07',
    location: 'Antofagasta, Chile',
    like: false,
  },
  {
    id: 5,
    description: 'Product 5',
    price: '$50.000',
    uploaded: '2023-10-07',
    location: 'Arica, Chile',
    like: false,
  },
  {
    id: 6,
    description: 'Product 6',
    price: '$60.000',
    uploaded: '2023-10-07',
    location: 'Iquique, Chile',
    like: false,
  },
  {
    id: 7,
    description: 'Product 7',
    price: '$70.000',
    uploaded: '2023-10-07',
    location: 'Punta Arenas, Chile',
    like: false,
  },
  {
    id: 8,
    description: 'Product 8',
    price: '$80.000',
    uploaded: '2023-10-08',
    location: 'La Serena, Chile',
    like: false,
  },
  {
    id: 9,
    description: 'Product 9',
    price: '$90.000',
    uploaded: '2023-10-08',
    location: 'Temuco, Chile',
    like: false,
  },
  {
    id: 10,
    description: 'Product 10',
    price: '$100.000',
    uploaded: '2023-10-08',
    location: 'Rancagua, Chile',
    like: false,
  },
];

const products2: IProduct[] = [
  {
    id: 1,
    description: 'Product 1',
    price: '$10.000',
  },
  {
    id: 2,
    description: 'Product 2',
    price: '$20.000',
  },
  {
    id: 3,
    description: 'Product 3',
    price: '$30.000',
  },
  {
    id: 4,
    description: 'Product 4',
    price: '$40.000',
  },
  {
    id: 5,
    description: 'Product 5',
    price: '$50.000',
  },
  {
    id: 6,
    description: 'Product 6',
    price: '$60.000',
  },
  {
    id: 7,
    description: 'Product 7',
    price: '$70.000',
  },
  {
    id: 8,
    description: 'Product 8',
    price: '$80.000',
  },
  {
    id: 9,
    description: 'Product 9',
    price: '$90.000',
  },
  {
    id: 10,
    description: 'Product 10',
    price: '$100.000',
  },
];
const HomeScreen = (props: Props) => {
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
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ProductsCard2 data={item} />}
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
