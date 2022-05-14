import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeStack from './HomeStackNavigator';
import ProfileStack from './ProfileStackNavigator';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
  );
}