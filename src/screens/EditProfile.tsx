import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import EditProfileForm from '../components/forms/EditProfileForm';

type Props = {};

const EditProfile = ({navigation}: {navigation: any}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <EditProfileForm navigation={navigation} />
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
