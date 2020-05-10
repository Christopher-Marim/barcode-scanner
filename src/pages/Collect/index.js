import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList,Button } from 'react-native';
import Item from '../../components/ItemList';
import { useSelector, useDispatch } from 'react-redux';

export default function Collect({ navigation }) {
  
  const inventories = useSelector(state => state.inventories);
  const currentInventory = useSelector(state => state.currentInventory);
  
  const dispatch = useDispatch();

  function addItemToList(codigo) {
    dispatch({ type: 'ADD_BARCODE', item: newItem });
  }
  
  const items = inventories[currentInventory].collectedItems;
  console.log('Itens Coletados: ', items);
  
  if (items.length > 0) {
    return (
      <>
        <FlatList
          style={{ marginTop: 10 }}
          contentContainerStyle={styles.list}
          data={items}
          renderItem={({ item }) => (

            <Item
              description={item.description}
              codigo={item.code}
              quantidade={item.collectedQty}
            />
            
          )}
          keyExtractor={item => item.code}
        />
        <Button 
          style={{backgroundColor:"black"}}
          title="Realizar Coleta"
          onPress={() => navigation.navigate('Scanner')}
        />
      </>
    );
  } else {
    return (
      <>
        <Button
          style={styles.button}
          title="Realizar Coleta"
          onPress={() => navigation.navigate('Scanner')}
        />
        <Button title="AddtoList" onPress={() => addItemToList()} />
      </>
    );
  }
}
const styles = StyleSheet.create({
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
  action:{
    backgroundColor:'#012554',
    borderRadius:5,
    paddingHorizontal:15,
    height: 45,
    marginHorizontal:105,
    width:'50%',
    justifyContent:'center',
    alignItems:"center",
   
  },
  actionText:{
    
    color:'white',
    fontSize:15,
    fontWeight:'bold',

  },
});
