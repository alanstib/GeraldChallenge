import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export interface IMenuItem {
  title: string;
  onPress?: () => void;
  screenName?: string;
  selected?: boolean;
}

const MenuItem: FC<IMenuItem> = ({ title, onPress, selected }) => (
  <TouchableOpacity onPress={onPress} style={{ backgroundColor: selected ? '#3f2635' : 'transparent', padding: 16, marginHorizontal: 16, marginVertical: 2, borderRadius: 10 }}>
    <Text style={{ color: selected ? '#da6761' : '#fff', fontSize: 20 }}>{title}</Text>
  </TouchableOpacity>
);

export default MenuItem;
