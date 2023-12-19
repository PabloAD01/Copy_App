import React from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {};

const socials = [
  {
    name: 'instagram',
    content: <Feather name="instagram" size={20} color={'#6A6A6A'} />,
  },
  {
    name: 'facebook',
    content: <Ionicons name="logo-facebook" size={20} color={'#6A6A6A'} />,
  },
  {
    name: 'youtube',
    content: <FontAwesome name="youtube-play" size={20} color={'#6A6A6A'} />,
  },
  {
    name: 'linkedin',
    content: <FontAwesome name="linkedin-square" size={20} color={'#6A6A6A'} />,
  },
  {
    name: 'google-play',
    content: <Entypo name="google-play" size={20} color={'#6A6A6A'} />,
  },
];

const SocialsButtons = (props: Props) => {
  return socials.map(social => (
    <TouchableOpacity
      key={social.name}
      style={{
        borderWidth: 1,
        borderColor: '#e5e3e3',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        flex: 1,
      }}>
      {social.content}
    </TouchableOpacity>
  ));
};

export default SocialsButtons;
