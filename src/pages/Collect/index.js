import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import Item from '../../components/ItemList';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import api from '../../services/api';
// import { Container } from './styles';

export default function Collect({ navigation }) {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  async function pushToServer() {
    const response = await api.post('', items);
    console.log(response.status);
  }
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
        <Button
          style={styles.button}
          title="Realizar Coleta"
          onPress={() => navigation.navigate('Scanner')}
        />
        <Button title="Push to Server" onPress={() => pushToServer()} />
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
    backgroundColor: 'blue',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 12,
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
