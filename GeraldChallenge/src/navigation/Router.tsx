import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuContent from '../components/Menu/MenuContent';
import NavigationHeader from '../components/NavigationHeader';
import { MainTab } from './MainTab';

const DrawerStack = createDrawerNavigator();

export function Router() {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        header: props => <NavigationHeader navigation={props.navigation} />,
        swipeEnabled: true,
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: '#1a142a',
        },
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={props => <MenuContent {...props} />}>
      <DrawerStack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
    </DrawerStack.Navigator>
  );
}
