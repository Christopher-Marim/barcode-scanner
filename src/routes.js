import * as React from 'react';

import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuProvider } from 'react-native-popup-menu';
import {useSelector} from 'react-redux';

const HomeStack = createStackNavigator();

import Scanner from './pages/Scanner';
import Home from './pages/Home';
import Collect from './pages/Collect';
import MySettings from './pages/MySettings';
import HeaderButtons from './components/HeaderButtons';
import SearchButton from './components/SearchButton';
import Login from './pages/Login';

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function Routes() {
  const collectTitle = useSelector(state => state.collectTitle);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItens: 'center' }}
    >
      <MenuProvider placement="bottom">
      <HomeStack.Navigator
        initialRouteName="Login"
        
       
      >
      <HomeStack.Screen 
          name="Login"
          component={Login}
          headerStatusBarHeight={0}
          options={{
            title: '',
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: forFade,
            headerStyle: {
              height:0,
              backgroundColor: '#012554',
            },
            headerTintColor: 'white',
            
          }}
        />
        <HomeStack.Screen
          name="Home"
          component={Home}
         
          options={{
            headerStatusBarHeight:0,
            headerRight: () => (
             <HeaderButtons/>
            ),
            headerLeft: () => (
              <SearchButton />
             ),
            title: 'ETM',
            headerTitleAlign: 'center',
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: forFade,
            headerTitleStyle: {
              fontSize: 20,
              paddingBottom: 0,
              fontWeight: 'bold',
              fontFamily: 'serif',
            },
            headerStyle: {
              height:70,
              backgroundColor: '#012554',
              
            },
            headerTintColor: 'white',
            gestureEnabled:false,
            
            
            
            
          }}
        />
        <HomeStack.Screen
          name="Scanner"
          component={Scanner}
          options={{
            title: 'Scanner',
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: forFade,
            headerStyle: {
              backgroundColor: '#012554',
            },
            headerTintColor: 'white',
          }}
        />
        
         <HomeStack.Screen
          name="MySettings"
          component={MySettings}
          options={{
            headerStatusBarHeight:0,
            title: 'Configurações',
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: forFade,
            headerStyle: {
              backgroundColor: '#012554',
            },
            headerTintColor: 'white',
          }}
        />
        <HomeStack.Screen
          name="Collect"
          component={Collect}
          options={{
            headerStatusBarHeight:0,
            title: collectTitle,
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
            cardStyleInterpolator: forFade,
            headerStyle: {
              backgroundColor: '#012554',
            },
            headerTintColor: 'white',
          }}
        />
      </HomeStack.Navigator>
      </MenuProvider>

    </SafeAreaView>
  );
}