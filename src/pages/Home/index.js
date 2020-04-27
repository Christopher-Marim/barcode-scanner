import React from 'react';
import { StyleSheet, TouchableOpacity, View, Button, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Inventory from '../../components/InventoryList';
import PopUpNewCollect from '../../components/PopUpCollect';
import styles from './styles'

export default function Home({ navigation }) {

  const isPopUpOpened = useSelector(state => state.isPopUpOpened[0]);
  const inventories = useSelector(state => state.inventories);
  
  dispatch = useDispatch();

  function pop(){
    dispatch({ type: 'SHOWPOPUP', value: true });
  }

  function goToCollect(id){
    dispatch({ type: 'SET_CURRENT_INVENTORY', idToShow: id });
    navigation.navigate('Collect');
  }

   return(
     <>
     <SafeAreaView stye={styles.container1}>
       <View>
        <FlatList
          style={{ marginTop: 10 }}
          contentContainerStyle={styles.list}
          data={inventories}
          renderItem={({item}) =>
            <View>
              <TouchableWithoutFeedback onPress={goToCollect(item.id)}>
                  <Inventory
                    nav={navigation.navigate}
                    name={item.collectName}
                    creationDate={item.collectDate}
                  />
              </TouchableWithoutFeedback>
           
              </View>
            
          }
          keyExtractor={item => item.id}
        />
       </View>

      <PopUpNewCollect isButtonPressed={isPopUpOpened}/>

     </SafeAreaView>
     <View style={styles.fabAdd}>
        <TouchableOpacity onPress={pop}>
          <Text style={styles.textButtonMore}>+</Text>
        </TouchableOpacity> 
      </View>
      </>
   )
}
