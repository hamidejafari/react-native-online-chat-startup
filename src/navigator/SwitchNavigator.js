import React, { useState, useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import AuthStackNavigator from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';
import analytics from '@react-native-firebase/analytics';

function SwitchNavigator() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log('FCM Message Data:', remoteMessage.data);

            // Update a users messages list using AsyncStorage
            //const currentMessages = await AsyncStorage.getItem('messages');
            //const messageArray = JSON.parse(currentMessages);
            //messageArray.push(remoteMessage.data);
            //await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
        });
    }, []);

    return (
        isAuthenticated ? <DrawerNavigator /> : <AuthStackNavigator />
    );
}

export default SwitchNavigator;
