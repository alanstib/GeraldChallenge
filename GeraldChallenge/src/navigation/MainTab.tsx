import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { ContactScreen } from '../screens/Contact';
import DrawerSceneWrapper from '../components/DrawerSceneWrapper';
import NavigationHeader from '../components/NavigationHeader';

const Tab = createBottomTabNavigator()

export function MainTab() {
  return (
    <DrawerSceneWrapper>
      <Tab.Navigator
        screenOptions={{
          header: props => <NavigationHeader navigation={props.navigation} />,
        }}>
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Contact' component={ContactScreen} />
      </Tab.Navigator>
    </DrawerSceneWrapper>
  )
}