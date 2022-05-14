import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeTabNavigator">
        <Drawer.Screen name="HomeTabNavigator" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}