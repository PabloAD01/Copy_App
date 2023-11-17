import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../../providers/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../../../App';

type Props = {};

const LogoutButton = (props: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const {logoutUser} = useContext(AuthContext);

  const handlePress = () => {
    logoutUser();
    navigation.navigate('Home');
  };

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: '#e5e3e3',
        backgroundColor: '#0977B6',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
      }}
      onPress={handlePress}>
      <MaterialCommunityIcons
        name="logout"
        size={20}
        color={'white'}
        style={{flex: 1}}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontWeight: '400',
          flex: 4,
        }}>
        Cerrar Sesión
      </Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
