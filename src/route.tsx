
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaHome from './pages/TelaHome';
import TelaLogin from './pages/Login';

const Stack = createNativeStackNavigator();




function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TelaLogin" component={TelaLogin} />
                <Stack.Screen name="Home" component={TelaHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Route;