import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Api} from '../../Api';
import {AuthContext} from '../providers/AuthProvider';

type Props = {};

const MyAccountScreen = ({navigation}: {navigation: any}) => {
  const {id, location, name} = useContext(AuthContext);
  const [addProducts, setAddProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(Api + '/products');
        const data = await response.json();
        const products = data.products
          .filter((product: {[key: string]: any}) => product.createdBy === id)
          .map((product: {[key: string]: any}) => ({
            ...product,
            images: product.imageUrls,
            price: product.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
          }));

        setAddProducts(products);
      } catch (error: any) {
        console.error('Error fetching products:', error.message);
      }
    };

    getProducts();
  }, []);
  const handlePress = () => {
    navigation.navigate('MyAds', {product: addProducts});
  };

  console.log(addProducts);

  return (
    <View style={{flex: 1, gap: 8}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <FontAwesome name="user-circle-o" size={100} color="gray" />
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>
            {name}
          </Text>
          <Text style={{fontSize: 12, color: 'gray'}}>{location} </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderColor: '#ECECEC',
            width: '100%',
            paddingVertical: 10,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 2,
              borderColor: '#ECECEC',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>
              0
            </Text>
            <Text style={{color: 'gray'}}>Visitas Totales</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>
              0
            </Text>
            <Text style={{color: 'gray'}}>Contactos Totales</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, gap: 8}}>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={handlePress}>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>Mis avisos</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                backgroundColor: '#BEBEBE',
                paddingHorizontal: 12,
                borderRadius: 8,
                color: 'white',
                fontWeight: '600',
              }}>
              {addProducts.length}
            </Text>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>Mis favoritos</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                backgroundColor: '#BEBEBE',
                paddingHorizontal: 12,
                borderRadius: 8,
                color: 'white',
                fontWeight: '600',
              }}>
              989090909
            </Text>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            padding: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: 'gray'}}>Mis búsquedas</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                backgroundColor: '#BEBEBE',
                paddingHorizontal: 12,
                borderRadius: 8,
                color: 'white',
                fontWeight: '600',
              }}>
              989090909
            </Text>
            <AntDesign name="right" size={14} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAccountScreen;
