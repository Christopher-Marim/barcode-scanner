import * as React from 'react';

import { Image,View} from 'react-native';
import { Icon, Button } from 'react-native-elements';

import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuContext } from 'react-native-popup-menu'

import Scanner from './pages/Scanner';
import Home from './pages/Home';
import Collect from './pages/Collect';
import MySettings from './pages/MySettings';
import HeaderButtonSend from './components/HeaderButtonSend';
import Login from './pages/Login';

const HomeStack = createStackNavigator();

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const HomeTabs = createMaterialTopTabNavigator();

function HomeTabsScreen() {
  return (
    <HomeTabs.Navigator
      tabBarPosition="top"
      swipeEnabled="true"
      animationEnable="enable"
      tabBarOptions={{
        inactiveTintColor: 'white',
        activeTintColor: 'white',
        style: { backgroundColor: '#012554' },

        indicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2,
        },

        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <HomeTabs.Screen name="Home" component={Home} />
      <HomeTabs.Screen name="Collect" component={Collect} />
    </HomeTabs.Navigator>
  );
}

function Routes() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItens: 'center' }}
    >
      <MenuContext placement="bottom">
      <HomeStack.Navigator
      initialRouteName="Login"
      >
      <HomeStack.Screen
          name="Login"
          component={Login}
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
          component={HomeTabsScreen}
          options={{
            headerRight: () => (
             <HeaderButtonSend />
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
              paddingBottom: 10,
              fontWeight: 'bold',
              fontFamily: 'serif',
            },
            headerStyle: {
              height:60,
              backgroundColor: '#012554',
            },
            headerTintColor: 'white',
            gestureEnabled:false,
            headerLeft:null
            
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
            title: 'MySettings',
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
      </MenuContext>

    </SafeAreaView>
  );
}

export default Routes;
