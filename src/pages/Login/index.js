/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';


export default function Login({navigation}){

const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
const [opacity] = useState(new Animated.Value(0));
useEffect(()=> {
  Animated.parallel([
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness:5
    }),
    Animated.timing(opacity, {
      toValue:1,
      duration:200,
    })
  ]).start();
  

},[]);


  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={{ 
          width: 150,
          height: 150,
        }}
        source={require('../../../assets/logo.png')} 
        />
      </View>
    <Animated.View 
    style={[
      styles.container,
      {
        opacity:opacity,
        transform:[
          {translateY: offset.y }
        ]
      }
    
    ]}
    >
      <TextInput
      style={styles.input}
      placeholder="Email"
      autoCorrect={false}
      onChangeText={()=> {}}
      />
      <TextInput
       style={styles.input}
      placeholder="Senha"
      autoCorrect={false}
      onChangeText={()=> {}}
      />

      <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >

        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSolicit}>

        <Text style={styles.solicitText} >Solicitar Criação de conta</Text>
      </TouchableOpacity>

    </Animated.View>

      </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#C5D1E1',
  },  
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50,
  },
  input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color: '#222',
    fontSize:17,
    borderRadius:7,
    padding:10,

  },
  btnSubmit:{
    backgroundColor:'#0027FF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,

  },
  submitText:{
    color: '#FFF',
    fontSize:18,
  },
  btnSolicit:{
    marginTop:10,
  },
  solicitText:{
    color:'#FFF'
  }


});
