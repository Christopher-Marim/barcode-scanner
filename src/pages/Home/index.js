import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default function Home( {navigation } ) {
  return (
    
    <View style={styles.container}>
        
    <Button rounded
    style={styles.button}
      title="Realizar consulta"
      onPress={() => navigation.navigate('Scanner')}
    ><Text>Realizar consulta</Text></Button>
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
      backgroundColor: '#0027FF',
    }
  });
  