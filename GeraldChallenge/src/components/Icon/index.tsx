import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/fonts/selection.json';
export { default as IconNames } from './iconNames';

const IcomoonIcon = createIconSetFromIcoMoon(icoMoonConfig);

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPress?: any;
}

const Icon: FC<Props> = ({ name, size = 24, color = '#9e9d95', onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IcomoonIcon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default Icon;
