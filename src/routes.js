import * as React from 'react';

import { Image } from 'react-native';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import Scanner from './pages/Scanner';
import Home from './pages/Home';
import Collect from './pages/Collect';

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
        style: { backgroundColor: '#0027FF' },

        indicatorStyle: {
          borderBottomColor: 'white',
          borderBottomWidth: 2,
        },

        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <HomeTabs.Screen name="Princial" component={Home} />
      <HomeTabs.Screen name="Coleta" component={Collect} />
    </HomeTabs.Navigator>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{ width: 70, height: 70 }}
      source={require('../assets/logo.png')}
    />
  );
}

function Routes() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'space-between', alignItens: 'center' }}
    >
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeTabsScreen}
          options={{
            title: 'ETM',
            headerTitleAlign: 'center',
            // headerLeft: props => <LogoTitle {...props} />,
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
              height: 25,
              backgroundColor: '#0027FF',
            },
            headerTintColor: 'white',
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
              backgroundColor: '#0027FF',
            },
            headerTintColor: 'white',
          }}
        />
      </HomeStack.Navigator>
    </SafeAreaView>
  );
}

export default Routes;
