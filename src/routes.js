import * as React from 'react';

import { createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Scanner from './pages/Scanner';
import Home from './pages/Home';
import Collect from './pages/Collect'

// const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  
  const HomeStack = createStackNavigator();
  
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} 
            options={
                {title:'Página Inicial',
                transitionSpec: {
                    open: TransitionSpecs.TransitionIOSSpec,
                    close: TransitionSpecs.TransitionIOSSpec, 
                },
                cardStyleInterpolator: forFade
        }}/>
        <HomeStack.Screen name="Scanner" component={Scanner} 
            options={{
                title:'Scanner',
                transitionSpec: {
                    open: TransitionSpecs.TransitionIOSSpec,
                    close: TransitionSpecs.TransitionIOSSpec, 
                },
                cardStyleInterpolator: forFade
        }} />
        
      </HomeStack.Navigator>
    );
  }
  
  function CollectStackScreen() {
    return (
        <Collect/>
    );
  }
 
  

function Routes() {
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Collect" component={CollectStackScreen} />
      </Tab.Navigator>

    );
}

export default Routes;