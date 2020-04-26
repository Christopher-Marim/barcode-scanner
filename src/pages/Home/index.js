import React, {useState} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  TextInput, 
  FlatList,
  SafeAreaView,
  Alert
} from "react-native";
import {useDispatch, useSelector} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PopUpNewCollect from '../../components/PopUpCollect';
import Inventory from '../../components/CollectList';
import styles from './styles';

export default function Home({ navigation }) {
  const isPopUpOpened = useSelector(state => state.isPopUpOpened[0]);
  const inventories = useSelector(state => state.inventories);
  console.log('inventories', inventories);
  
  const dispatch = useDispatch();

  function pop(){
    dispatch({ type: 'SHOWPOPUP', value: true });
  }  
    return(
      <SafeAreaView style={styles.container1}>
        
        <FlatList
          data={inventories}
          renderItem={({ item }) => <Inventory collectName={item.collectName} collectDate={item.collectDate} />}
          keyExtractor={item => item.id}
        />

        <PopUpNewCollect isButtonPressed={isPopUpOpened}/>

        <View style={styles.positionButtonMore}>
          <TouchableOpacity style={styles.buttonMore}
            onPress={pop}>
              <Text style={styles.textButtonMore}        
                    >+</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
