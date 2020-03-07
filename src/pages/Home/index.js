import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function Home( {navigation } ) {
  return (
    <View style={styles.container}>
        <Button style={styles.button} title="Realizar Coleta" onPress={() => navigation.navigate('Scanner')}/>
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
        backgroundColor: 'red',
    }
  });
  