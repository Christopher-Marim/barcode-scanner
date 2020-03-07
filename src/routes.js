import * as React from 'react';

import { createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


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
                {headerShown: false,
                  title:'Página Inicial',
                transitionSpec: {
                    open: TransitionSpecs.TransitionIOSSpec,
                    close: TransitionSpecs.TransitionIOSSpec, 
                },
                cardStyleInterpolator: forFade,
                
                headerStyle:{
                  backgroundColor:'#337DFF'
                },
                headerTintColor:'white',
                screen:HomeStackScreen,
                
        }
        
        }/>
        <HomeStack.Screen name="Scanner" component={Scanner} 
            options={{headerShown: false,
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
      <SafeAreaView style={{flex:1, justifyContent:'space-between', alignItens:'center'}}>
        
        <Tab.Navigator tabBarPosition='top'
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
       
      }}
      
        >
        <Tab.Screen name="Home" component={HomeStackScreen}  />
        <Tab.Screen name="Collect" component={CollectStackScreen} />
      </Tab.Navigator>
    
      </SafeAreaView>

    );
}

export default Routes;