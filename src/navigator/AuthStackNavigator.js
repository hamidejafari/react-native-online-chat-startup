import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'My home',
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStackNavigator;
