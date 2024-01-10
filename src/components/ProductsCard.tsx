import React, {useContext, useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {IProduct} from '../screens/HomeScreen';
import LikeButton from './LikeButton';
import {AuthContext} from '../providers/AuthProvider';

type Props = {
  data: IProduct;
  onPress: (item: IProduct) => void;
};

const ProductsCard = ({data, onPress}: Props) => {
  const [playing, setPlaying] = useState<boolean | null>(null);
  const {deleteProduct, loggedIn, id} = useContext(AuthContext);
  const handlePress = () => {
    setPlaying(prevPlaying => (prevPlaying === null ? true : !prevPlaying));
  };

  const handleDelete = () => {
    // Verifica si el usuario es el creador del producto
    if (loggedIn && data.createdBy === id) {
      // Elimina el producto
      deleteProduct(data._id);
    }
  };

  const handleOnPress = () => {
    onPress(data);
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleOnPress}>
      <Image
        source={{
          uri: data.images[0] || 'https://dummyimage.com/300',
        }}
        style={{
          height: 130,
          width: 130,
        }}
      />
      <View style={styles.cardContent}>
        <View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={{color: '#757575'}}>{data.location}</Text>
            <Text style={{color: '#757575'}}>•</Text>
            <Text style={{color: '#757575'}}>{data.createdAt}</Text>
          </View>
          <Text style={{color: '#333333'}}>{data.title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#F08648', fontWeight: '600', fontSize: 20}}>
            ${data.price}
          </Text>
          <LikeButton like={playing} onPress={handlePress} />
        </View>
        {loggedIn && data.createdBy === id && (
          <TouchableOpacity onPress={handleDelete}>
            <Text style={{color: 'red'}}>Eliminar</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    elevation: 5,
  },
  cardContent: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ProductsCard;
