import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, LogBox} from 'react-native';
import {categorias} from '../constants/Categories';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type Props = {};

const CategoriesScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [expandedCategories, setExpandedCategories] = useState<string | null>(
    null,
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories(prevCategory =>
      prevCategory === category ? null : category,
    );
  };

  const handleCategory = (subcategory: string, category: string) => {
    route.params.setCategory(subcategory);
    toggleCategory(category);
    navigation.navigate('PostAd');
  };

  return (
    <Animated.ScrollView style={{backgroundColor: 'white'}}>
      {categorias.map((item, index) => (
        <View key={index}>
          {item.name === 'Otros' ? (
            <TouchableOpacity
              onPress={() => handleCategory(item.name, item.name)}
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '600', color: 'black'}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => toggleCategory(item.name)}
              style={{
                width: '100%',
                backgroundColor: 'white',
                position: 'relative',
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '600', color: 'black'}}>
                {item.name}
              </Text>
              <AntDesign
                name={expandedCategories?.includes(item.name) ? 'up' : 'right'}
                size={14}
                color="black"
              />
            </TouchableOpacity>
          )}

          {expandedCategories?.includes(item.name) &&
            item.type?.map((subcategory, subcategoryIndex) => (
              <TouchableOpacity
                key={subcategoryIndex}
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  position: 'relative',
                  padding: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                onPress={() => handleCategory(subcategory, item.name)}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: '#6A6A6A',
                    borderBottomWidth: 1,
                    width: '100%',
                    borderColor: '#e5e3e3',
                  }}>
                  {subcategory}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default CategoriesScreen;
