import React from 'react';

import { StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action:{
    backgroundColor:'#012554',
    borderRadius:5,
    paddingHorizontal:15,
    height: 45,
    width:'100%',
    justifyContent:'center',
    alignItems:"center",
  },
  actionText:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  },
});
