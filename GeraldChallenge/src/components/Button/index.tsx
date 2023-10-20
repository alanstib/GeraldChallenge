import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={{ width: '100%', backgroundColor: '#3f2635', padding: 16, borderRadius: 16, alignItems: 'center' }}>
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600' }}>{text}</Text>
  </TouchableOpacity>
);

export default Button;