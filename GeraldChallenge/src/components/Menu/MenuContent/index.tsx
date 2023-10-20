import { CommonActions } from '@react-navigation/native';
import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { MenuHeader } from '../MenuHeader';
import MenuItem from '../MenuItem';
import MenuItems from '../MenuItem/menuItems';

interface IMenuItem {
  title: string;
  screenName: string;
}

const MenuContent = ({ navigation }: any) => {
  let items = MenuItems.items;

  const renderItem: FC<{ item: IMenuItem }> = ({ item }) => (
    <MenuItem title={item.title} onPress={() => handleItemClick(item)} selected={item.title === 'Start'} />
  );

  const handleItemClick = (item: IMenuItem) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: item.screenName,
      })
    );
  };

  return (
    <View style={{ backgroundColor: '#1a142a', flex: 1 }}>
      <MenuHeader />
      <FlatList
        data={items}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        style={{flexGrow: 0}}
      />
      <View style={{ height: 1, backgroundColor: '#9e9d95', margin: 32 }}></View>
      <MenuItem title='Sign Out' onPress={() => {}} selected={false} />
    </View>
  );
};

export default MenuContent;
