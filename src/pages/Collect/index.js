import React, {useState, useCallback} from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import Item from '../../components/ItemList'
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { _barCode } from '../../services/index'
import {Ionicons } from '@expo/vector-icons';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text, Content } from 'native-base';

// import { Container } from './styles';

export default function Collect({navigation}) {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const [code, setCode] = useState(0);

  const newItem = {
      description: 'Description',
      codigo: '654321',
      quantidade: '10'
  }

  function addItemToList(codigo){
    dispatch({type: 'ADD_BARCODE', item: newItem})
  }

  if (items.length > 0){
    console.log(items)
    return (<Container>
      <>
        <FlatList
          style={{ marginTop: 10}}
          contentContainerStyle={styles.list}
          data={items}
          renderItem={({item}) => <Item description={item.description} codigo={item.codigo} quantidade={item.quantidade}/>}
          keyExtractor={(item) => item.codigo}
          />
          <Button block 
          style={styles.button} 
          title = "Realizar Coleta" 
          onPress={() => navigation.navigate('Scanner')}
          >
            <Text>Realizar Coleta</Text>
            
            </Button>
          <Button block 
          style={styles.button} 
          title= "AddtoList" 
          onPress={() => addItemToList()}
          >
            <Text>Add to List</Text>

          </Button>
     </>
     
 
   </Container>
    );
  }else{
    return (
      <>
     <Button block 
          style={styles.button} 
          title = "Realizar Coleta" 
          onPress={() => navigation.navigate('Scanner')}
          >
            <Text>Realizar Coleta</Text>
            
            </Button>
          <Button block 
          style={styles.button} 
          title= "AddtoList" 
          onPress={() => addItemToList()}
          >
            <Text>Add to List</Text>

          </Button>
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
    textAlign:'center',
    justifyContent:'center',
  },
  list: {
    paddingHorizontal: 20,
  },
})
