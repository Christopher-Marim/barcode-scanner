import * as React from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';

import Scanner from './pages/Scanner';
import Home from './pages/Home';
import Collect from './pages/Collect'

const Stack = createStackNavigator();

const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

function Routes() {
    return(
        <Stack.Navigator 
            initialRouteName="Collect"
            headerMode="screen"
            
            screenOptions={{
            headerTintColor:'white',
            headerStyle:{backgroundColor: 'blue',},
            }}
        >
            <Stack.Screen name="Home" component={Home} 
                options={
                    {title:'Página Inicial',
                    transitionSpec: {
                        open: TransitionSpecs.TransitionIOSSpec,
                        close: TransitionSpecs.TransitionIOSSpec, 
                    },
                    cardStyleInterpolator: forFade
            }}/>

            <Stack.Screen name="Collect" component={Collect} 
                options={{
                    title:'Collect',
                    transitionSpec: {
                        open: TransitionSpecs.TransitionIOSSpec,
                        close: TransitionSpecs.TransitionIOSSpec, 
                    },
                    cardStyleInterpolator: forFade
            }} />
            
            <Stack.Screen name="Scanner" component={Scanner} 
                options={{
                    title:'Scanner',
                    transitionSpec: {
                        open: TransitionSpecs.TransitionIOSSpec,
                        close: TransitionSpecs.TransitionIOSSpec, 
                    },
                    cardStyleInterpolator: forFade
            }} />

            
        </Stack.Navigator>
    );
}

export default Routes;