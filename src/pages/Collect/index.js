import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList,Button } from 'react-native';
import Item from '../../components/ItemList';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';



// import { Container } from './styles';

export default function Collect({ navigation }) {
  
  return(<Text>teste</Text>)
  // const items = useSelector(state => state.inventories);
  
  // const dispatch = useDispatch();

  // function addItemToList(codigo) {
  //   dispatch({ type: 'ADD_BARCODE', item: newItem });
  // }

   
  // if (items.length > 0) {
  //   console.log('Itens Coletados: ',items);
  //   return (
  //     <>
  //       <FlatList
  //         style={{ marginTop: 10 }}
  //         contentContainerStyle={styles.list}
  //         data={items}
  //         renderItem={({ item }) => (
  //           <Item
  //             description={item.description}
  //             codigo={item.code}
  //             quantidade={item.collectedQty}
  //           />
  //         )}
  //         keyExtractor={item => item.code}
  //       />
  //       <Button 
  //         style={{backgroundColor:"black"}}
  //         title="Realizar Coleta"
  //         onPress={() => navigation.navigate('Scanner')}
  //       />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Button
  //         style={styles.button}
  //         title="Realizar Coleta"
  //         onPress={() => navigation.navigate('Scanner')}
  //       />
  //       <Button title="AddtoList" onPress={() => addItemToList()} />
  //     </>
  //   );
  // }
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
});
