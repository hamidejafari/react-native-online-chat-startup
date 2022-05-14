import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './../screens/Home';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>

  );
}

export default HomeStackNavigator;