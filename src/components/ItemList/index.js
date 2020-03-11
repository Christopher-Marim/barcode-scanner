import React, {useState, useEffect, useCallback} from 'react';
import { Text, View, Button, FlatList, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements'
import {useFocusEffect} from '@react-navigation/native'
import {AsyncStorage} from 'react-native';
import {_barCode} from '../../services/index'
// import { Container } from './styles';

retrieveData = async () => {
  
}

export default function Item({description, codigo, quantidade}) {

  return(
    <View style={styles.listItem}>
      <View style={{flex:1, paddingRight: 210}}>
        <Text style ={styles.title}>
          {description}
        </Text>
        <Text>
          {codigo}
        </Text>
      </View>
      
      <View style ={styles.quantity}>
        <View style={ {flexDirection:'row', alignItems:'center'}}>
          <Icon name='remove-circle'color='red' onPress={()=>addItems(5)}/>
            <Input style={{
              alignItems: 'center',
              paddingHorizontal: 2}}
              
              placeholder={quantidade}
              
              />
          <Icon name='add-circle' color='green'/> 
        </View>
      </View>
    </View>
  )  
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    marginTop: 10,
    padding: 5,
  },
  title:{
    fontSize: 20,
    color: 'black',
    justifyContent: 'flex-start'
  },
  quantity:{
    flex: 1,
    paddingTop: 2,
    paddingLeft: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-end', 
    
  },
  code: {
    fontSize: 10
  }
});

