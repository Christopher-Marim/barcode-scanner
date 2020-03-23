import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import {Icon} from 'react-native-elements';

export default function MySettings({navigation}) {
  return (
     
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Realizar consulta"
        onPress={() => navigation.navigate('')}
      >
        <Text>Realizar consuuulta</Text>
      </Button>
     
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'black',
    
    
  },
});
