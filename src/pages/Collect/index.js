import React, { useState } from 'react';
import {Text, 
        View, 
        StyleSheet, 
        FlatList, 
        TouchableOpacity, 
        TextInput,
        TouchableHighlight 
} from 'react-native';
import {Icon} from 'react-native-elements';
import Item from '../../components/ItemList';
import { useSelector, useDispatch } from 'react-redux';

export default function Collect({ navigation }) {
  
  const inventories = useSelector(state => state.inventories);
  const currentInventory = useSelector(state => state.currentInventory);
  const [auxCodigo, onChangeAuxCodigo] = React.useState("");
  const [codigo, setCodigo] = useState();
  
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
        <View style={{alignItems:"flex-start",flex:0, flexDirection:'row',paddingLeft:20}}>
          <TextInput
              style={styles.inputCodigo }
              placeholder={"Codigo"}
              onChangeText={TextCodigo => onChangeAuxCodigo(TextCodigo)}
              value={auxCodigo}
            />
          <TouchableHighlight
              style={{ ...styles.buttonAdd, backgroundColor: "white", borderLeftWidth:1,width:'10%' }}
              onPress={()=> {setCodigo(auxCodigo), addItemToList(codigo)}}
              >
              <Text style={styles.textStyle}>+</Text>
            </TouchableHighlight>

            <TouchableOpacity style={styles.buttonCam}
               onPress={() => navigation.navigate('Scanner')}>
              <View>
                <Icon name="filter-center-focus"/> 
              </View>
            </TouchableOpacity>


        </View>
      </>
    );
  } else {
    return (
      <View style={{flex:1, justifyContent:"center"}}>
        <TouchableOpacity style={styles.action}
         onPress={() => navigation.navigate('Scanner')}>
           <Text style={styles.actionText}>Realizar Consulta</Text>

        </TouchableOpacity>
        {/* <Button title="AddtoList" onPress={() => addItemToList()} /> */}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0027FF',
    borderColor: 'white',
    borderWidth: 2,
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
  buttonAdd:{
    backgroundColor:'white',
    borderLeftWidth:1.5,
    borderBottomWidth:1.5,
    borderRightWidth:1.5,
    borderTopWidth:1.5,
    borderColor:"#012554",
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    height: 45,
    marginHorizontal:-4,
    width:'10%',
    justifyContent:'center',
    alignItems:"center",
    
   
  },
  buttonCam:{
    backgroundColor:'white',
    borderRadius:100,
    borderWidth:1.5,
    borderColor:"#012554",
    height: 45,
    marginHorizontal:10,
    width:'15%',
    justifyContent:'center',
    alignItems:"center",
    
   
  },
  actionText:{
    
    color:'#012554',
    fontSize:15,
    fontWeight:'bold',

  },
  inputCodigo:{
    height: 45, 
    backgroundColor: '#fff',
    width:"70%",
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    borderBottomWidth:1.5,
    borderLeftWidth:1.5,
    borderTopWidth:1.5,
    borderColor:"#012554",
    marginBottom:20,
    paddingLeft:10,
    fontWeight:'500',

  },
  textStyle:{
    fontSize:30,
    color:'#012554'
  }
});