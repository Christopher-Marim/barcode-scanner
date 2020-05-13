/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

import styles from './styles';


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
          width: 170,
          height: 170,
        }}
        source={require('../../../assets/icon.png')} 
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

