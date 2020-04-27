import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList,Button } from 'react-native';
import Item from '../../components/ItemList';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';



// import { Container } from './styles';

export default function Collect({ navigation }) {
  
  const items = useSelector(state => state.inventories);
  const currentInventory = useSelector(state => state.currentInventory);
  
  const dispatch = useDispatch();

  function addItemToList(codigo) {
    dispatch({ type: 'ADD_BARCODE', item: newItem });
  }

  if (items[currentInventory[0] - 1].length > 0) {
    console.log('Itens Coletados: ',items[currentInventory[0] - 1]);
    console.log('cur inve: ',currentInventory);
    return (
      <>
        <FlatList
          style={{ marginTop: 10 }}
          contentContainerStyle={styles.list}
          data={items[currentInventory[0] - 1]}
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
