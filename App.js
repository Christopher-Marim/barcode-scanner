import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {   SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store'

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>  
      </Provider>
    </SafeAreaProvider>
  );
}
