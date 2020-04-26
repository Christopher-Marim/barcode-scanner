import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Inventory from '../../components/InventoryList';



export default function Home({ navigation }) {
  const inventories = useSelector(state => state.inventories);
  
  dispatch = useDispatch();

  function newInventory() {
    const d = new Date();
    let creationDate = d.getDate() + '\\' + (d.getMonth() + 1) + '\\' + d.getFullYear();
    
    dispatch({ type: 'ADD_INVENTORY', date: creationDate});
  }

  if(inventories.length > 0)
  {
   return(
     <>
      <FlatList
         style={{ marginTop: 10 }}
         contentContainerStyle={styles.list}
         data={inventories}
         renderItem={({item}) =>
          <Inventory
          name={item.collectName}
          date={item.collectDate}
          />
        }
         keyExtractor={item => item.id}
      />

     </>
   ) 
    
  }

  return (
     
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Realizar consulta"
        onPress={newInventory()}
      />
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
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 20,
  },
});
