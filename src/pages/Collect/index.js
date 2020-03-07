import React from 'react';
import { Text, View, Button } from 'react-native';

// import { Container } from './styles';

export default function Collect({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inventory</Text>
        <Button title="Realizar Coleta"/>
        
      </View>
    

  );
}
