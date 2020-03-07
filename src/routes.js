import * as React from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator} from '@react-navigation/stack';

import Scanner from './pages/Scanner';
import Home from './pages/Home';

const Stack = createStackNavigator();

function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Scanner" component={Scanner} />

        </Stack.Navigator>
    );
}

export default Routes;