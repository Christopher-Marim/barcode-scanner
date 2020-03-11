import React, {useState, useCallback} from 'react';
import { View, Button, StyleSheet, FlatList} from 'react-native';
import Item from '../../components/ItemList'
import { useFocusEffect } from '@react-navigation/native';
import { _barCode } from '../../services/index'
// import { Container } from './styles';

export default function Collect({navigation}) {
  //const {barcode} = route.params;
  const [code, setCode] = useState(0);
  const [ items, setiTems ] = useState([]);

  function addItemToList(codigo){
    setiTems(
      [
        ...items,
        {
          id: items.length.toString,
          description: 'Banco',
          codigo: codigo,
          quantidade: '1'
        }
      ]
    )
  }

  useFocusEffect(
    useCallback(() => {
      console.log(`O barcode é ${_barCode}`);
      console.log(`O code é ${code}`);
      
      if(code !== _barCode && _barCode != 0){
        console.log(`code é diferente`)
        addItemToList(_barCode);
        setCode(_barCode);
      }
     
    },[_barCode])
  );

  if (items.length > 0){
    console.log(items)
    return (
      <>
        <FlatList
          style={{ marginTop: 10}}
          contentContainerStyle={styles.list}
          data={items}
          renderItem={({item}) => <Item description={item.description} codigo={item.codigo} quantidade={item.quantidade}/>}
          keyExtractor={(item) => item.codigo}
          />
          <Button style={styles.button} title = "Realizar Coleta" onPress={() => navigation.navigate('Scanner')}/>
          <Button title= "AddtoList" onPress={() => addItemToList(321321)} />
     </>
    );
  }else{
    return (
      <>
      <Button style={styles.button} title = "Realizar Coleta" onPress={() => navigation.navigate('Scanner')}/>
      <Button title= "AddtoList" onPress={() => addItemToList(321321)} />
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
    textAlign:'center',
  },
  list: {
    paddingHorizontal: 20,
  },
})
