import React, {useState, useCallback} from 'react';
import { View, Button, StyleSheet, FlatList} from 'react-native';
import Item from '../../components/ItemList'
import { useFocusEffect } from '@react-navigation/native';
import { _barCode } from '../../services/index'
// import { Container } from './styles';

export default function Collect({navigation}) {
  //const {barcode} = route.params;
  const code = 0;
  const [ items, setiTems ] = useState([{
    id: '1',
    description: "Cadeira",
    codigo: '8333',
    quantidade: '1'
  }]);

  function addItemToList(codigo){
    setiTems(
      [
        ...items,
        {
          id: '1',
          description: 'Banco',
          codigo: codigo,
          quantidade: '3'
        }
      ]
    )
  }

  useFocusEffect(
    useCallback(() => {
      console.log(`O barcode mudou para ${_barCode}`)
      addItemToList(_barCode)
    },[_barCode])
  );

  return (
    <>
      <FlatList
        style={{ marginTop: 10}}
        contentContainerStyle={styles.list}
        data={items}
        renderItem={({item}) => <Item description={item.description} codigo={item.codigo} quantidade={item.quantidade}/>}
        key={items.length}
        />
      <Button style={styles.button} title = "Realizar Coleta" onPress={() => navigation.navigate('Scanner')}/>
      <Button title= "AddtoList" onPress={() => addItemToList(321321)} />
   </>
  );
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
    textAlign:'center',
  },
  list: {
    paddingHorizontal: 20,
  },
})
