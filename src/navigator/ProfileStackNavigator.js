import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './../screens/Profile';

const Stack = createStackNavigator();

function ProfileStackNavigator() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>

  );
}

export default ProfileStackNavigator;