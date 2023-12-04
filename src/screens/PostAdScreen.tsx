import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import PostAdForm from '../components/forms/PostAdForm';

type Props = {};

const PostAdScreen = (props: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <PostAdForm />
    </KeyboardAvoidingView>
  );
};

export default PostAdScreen;
