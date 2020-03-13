import * as React from 'react';

import {Image} from 'react-native';
import { createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text, Content, Col, View } from 'native-base';

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
          style:{backgroundColor:'#0027FF'},

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

  

function LogoTitle(){
return(<Image
    style={{width:70, height:70}}
    source={require('../assets/logo.png')}/>
);
  }

function Routes() {
    return(
      <SafeAreaView style={{flex:1, justifyContent:'space-between', alignItens:'center'}}>
        
        <HomeStack.Navigator>
           <HomeStack.Screen 
           name="Home" component={HomeTabsScreen} 
          options={{
          title:'ETM',
          headerTitleAlign:'center',
          // headerLeft: props => <LogoTitle {...props} />,
            transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec, 
            },
            headerRight: () => (
              <Header style={{backgroundColor:'#0027FF', shadowColor:'transparent', elevation:0}} >
              <Button transparent
              
                onPress={() => alert('This is a button!')}
                title="..."
                color="#0027FF"><Icon name={"ios-paper-plane"} style={{fontSize:30, color: 'white',backgroundColor:'#0027FF'}}/></Button>
                <Button transparent
              
                onPress={() => alert('This is a COCO!')}
                title="..."
                color="#0027FF"><Icon name={"md-more"} style={{fontSize:30, color: 'white',backgroundColor:'#0027FF'}}/></Button>
                
                </Header>
            ),
            cardStyleInterpolator: forFade,
            headerTitleStyle:{
              fontSize:30, 
              paddingBottom:10,
              fontWeight:'bold',
              fontFamily:'serif'
            },
            headerStyle:{
              backgroundColor:'#0027FF'
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
            backgroundColor:'#0027FF'  
          },
          headerTintColor:'white',
        }}
    />
        </HomeStack.Navigator>
      </SafeAreaView>

    );
}

export default Routes;
