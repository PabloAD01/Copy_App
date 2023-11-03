import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../../../App';
import {AuthContext} from '../../../providers/AuthProvider';

type Props = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

const PostAdButton = ({modalVisible, setModalVisible}: Props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {loggedIn} = useContext(AuthContext);

  const handlePress = () => {
    if (!loggedIn) {
      setModalVisible(true);
      return;
    }

    navigation.navigate('PostAd');
  };

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: '#e5e3e3',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
      }}
      onPress={handlePress}>
      <FontAwesome name="edit" size={20} color={'#6A6A6A'} style={{flex: 1}} />
      <Text
        style={{
          color: '#6A6A6A',
          fontSize: 15,
          fontWeight: '400',
          flex: 4,
        }}>
        Publicar aviso
      </Text>
    </TouchableOpacity>
  );
};

export default PostAdButton;
