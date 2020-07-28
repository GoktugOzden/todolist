import React from 'react';
import { observer } from 'mobx-react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './Index/Index';

import DeviceHelper from '../Helper/DeviceHelper';

import SplashController from '../Controllers/SplashController';

const Stack = createStackNavigator();

class App extends React.Component {

    navigation() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name={'Index'} component={Index} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    render() {
        return (
            <>
                {this.navigation()}
            </>
        );
    }
}

export default observer(App);