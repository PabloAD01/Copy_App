import React, {useContext, useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Api} from '../../Api';
import {AuthContext} from '../providers/AuthProvider';
import ProductsCard from '../components/ProductsCard';
import ProductsCard2 from '../components/ProductsCard2';
import {IProduct} from './HomeScreen';
import {useNavigation} from '@react-navigation/native';
import {ProductScreenNavigationProp} from '../../App';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {};

const MyAds = ({route}: {route: any}) => {
  const {product} = route.params;
  const navigation = useNavigation<ProductScreenNavigationProp>();

  const handlePress = (product: IProduct) => {
    navigation.navigate('Product', {product: product});
  };

  return (
    <View style={styles.mainContainer}>
      {product.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No tienes anuncios</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PostAd')}>
            <Text>Publicar aviso</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={styles.contentContainer}
          removeClippedSubviews={true}>
          {product.map((item: any, index: number) => {
            return (
              <View key={item['_id']} style={{marginBottom: 10}}>
                <ProductsCard data={item} onPress={handlePress} />
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 3,
    paddingVertical: 10,
  },
});

export default MyAds;
