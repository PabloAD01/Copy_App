import React from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

type Props = {};

const PostAdScreen = (props: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#EDECEA'}}>
      <View
        style={{
          height: '20%',
          paddingVertical: 4,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <ScrollView style={{flex: 1}} horizontal={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              flexDirection: 'row',
              gap: 32,
            }}>
            <Image
              source={{uri: 'https://dummyimage.com/300'}}
              style={{width: 100, height: 100, borderRadius: 8}}
            />
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderRadius: 8,
              }}></View>
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderRadius: 8,
              }}></View>
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderRadius: 8,
              }}></View>
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderRadius: 8,
              }}></View>
            <View
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderRadius: 8,
              }}></View>
          </View>
        </ScrollView>
        <Text style={{textAlign: 'center', color: 'black'}}>
          Puedes subir hasta 6 fotos
        </Text>
      </View>

      <View
        style={{
          height: '80%',
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'relative',
            padding: 16,
          }}>
          <Text
            style={{position: 'absolute', zIndex: 99999, left: 26, top: 26}}>
            Título
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              paddingHorizontal: 10,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderRadius: 8,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PostAdScreen;
