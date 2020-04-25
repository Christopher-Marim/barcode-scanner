import React from 'react';

import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

export default function Home({ navigation }) {
  return (
     
    <View style={styles.container} >

      <View style={styles.actions}>
        
        <TouchableOpacity style={styles.action}
         onPress={() => navigation.navigate('Scanner')}>
           <Text style={styles.actionText}>Realizar Consulta</Text>

        </TouchableOpacity>
        
      </View>
     
    </View>
  );
}
