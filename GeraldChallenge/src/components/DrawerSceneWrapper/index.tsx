import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

const DrawerSceneWrapper = ({ children }) => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {scale: interpolate(progress.value, [0, 1], [1, 0.9], 'clamp')},
      // {rotate: `${interpolate(progress.value, [0, 1], [0, -15])}deg`},
    ],
    borderRadius: 20,
    overflow: 'hidden',
  }));
  return (
    <Animated.View style={[animatedStyle, {flex: 1}]}>{children}</Animated.View>
  );
};

export default DrawerSceneWrapper;
