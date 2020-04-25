import React, { useState } from 'react';
import { View, StyleSheet, FlatList,Button, Text } from 'react-native';
import Item from '../../components/ItemList';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


// import { Container } from './styles';

export default function Collect({ navigation }) {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

 
  const newItem = {
    description: '',
    code: '',
    qty: 1,
  };

  function addItemToList(codigo) {
    dispatch({ type: 'ADD_BARCODE', item: newItem });
  }

   
  if (items.length > 0) {
    console.log(items);
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
              quantidade={item.qty}
            />
          )}
          keyExtractor={item => item.code}
        />
        <TouchableOpacity style={styles.action}
         onPress={() => navigation.navigate('Scanner')}>
           <Text style={styles.actionText}>Realizar Consulta</Text>

        </TouchableOpacity>
       
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
