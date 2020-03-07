import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Button, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>  
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
