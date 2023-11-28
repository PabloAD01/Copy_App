import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import {TouchableOpacity} from 'react-native';
type Props = {
  like: boolean | null;
  onPress: () => void;
};

const LikeButton = ({like, onPress}: Props) => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    if (like !== null) {
      if (like) {
        animationRef.current?.play(60, 120);
      } else {
        animationRef.current?.play(70, 30);
      }
    }
  }, [like]);

  return (
    <TouchableOpacity
      style={{width: 30, height: 30, position: 'relative'}}
      onPress={onPress}>
      <LottieView
        style={{
          width: 100,
          height: 100,
          position: 'absolute',
          top: -36,
          left: -36,
        }}
        ref={animationRef}
        source={require('../assets/animations/heartAni.json')}
        loop={false}
      />
    </TouchableOpacity>
  );
};

export default LikeButton;
