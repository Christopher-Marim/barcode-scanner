import * as React from 'react';

import { createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  SafeAreaView } from 'react-native-safe-area-context';


import Scanner from './pages/Scanner';
import Home from './pages/Home';
import Collect from './pages/Collect'

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
      tabBarPosition='top'
        swipeEnabled='true'
        animationEnable='enable'
        tabBarOptions={{
          inactiveTintColor: 'white',
          activeTintColor:'white',
          style:{backgroundColor:'#337DFF'},

         indicatorStyle:{
           borderBottomColor:"grey",
           borderBottomWidth: 2
         }, 
          
       labelStyle:{
         fontSize:12,
       },
       
      }}>
         <HomeTabs.Screen name="Home" component={Home}  />
         <HomeTabs.Screen name="Collect" component={Collect} />
      </HomeTabs.Navigator>
    );
  }

function Routes() {
    return(
      <SafeAreaView style={{flex:1, justifyContent:'space-between', alignItens:'center'}}>
        
        <HomeStack.Navigator>
           <HomeStack.Screen name="Home" component={HomeTabsScreen} 
          options={{
          title:'ETM',
          headerTitleAlign:'center',
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec, 
            },
            cardStyleInterpolator: forFade,
            headerTitleStyle:{
              fontSize:20, 
              paddingBottom:10,
            },
            headerStyle:{
              backgroundColor:'#337DFF'
            },
            headerTintColor:'white',
          }
    
    }/>
    <HomeStack.Screen name="Scanner" component={Scanner} 
        options={{
          title:'Scanner',
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec, 
          },
          cardStyleInterpolator: forFade,
          headerStyle:{
            backgroundColor:'#337DFF'  
          },
          headerTintColor:'white',
        }}
    />
        </HomeStack.Navigator>
      </SafeAreaView>

    );
}

export default Routes;