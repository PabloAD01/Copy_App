import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {};

const MyAccountScreen = (props: Props) => {
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
            Pablo
          </Text>
          <Text style={{fontSize: 12, color: 'gray'}}>
            Región de Magallanes y Antártica Chilena
          </Text>
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
          }}>
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
