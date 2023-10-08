import React, {useState} from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {IProduct} from '../screens/HomeScreen';
import LikeButton from './LikeButton';


type Props = {
  data: IProduct;
};



const ProductsCard = ({data}: Props) => {

  const [playing, setPlaying] = useState(data?.like || false);

  const handlePress = () => {
    setPlaying(!playing);
  }

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
          <View style={{flexDirection: 'row', gap: 10,}}>
            <Text style={{color: '#757575'}}>{data.uploaded}</Text>
            <Text style={{color: '#757575'}}>{data.location}</Text>
          </View>
          <Text style={{color: '#333333'}}>{data.description}</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: '#F08648' ,fontWeight: '600', fontSize: 20}}>{data.price}</Text>
            <LikeButton like={playing} onPress={handlePress} />
        
        </View>
        </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  cardContainer:{ 
    flexDirection: 'row',
    backgroundColor: '#FFF',
    elevation: 5,
    
  },
  cardContent: {
  width: '100%',
  flex:1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 10,
  }
})

export default ProductsCard;
