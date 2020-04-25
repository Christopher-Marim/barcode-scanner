import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput 
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function MySettings({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [auxServidor, onChangeAuxServidor] = React.useState("");
  const [server, setServidor] = useState();

  twoOptionAlertHandler = () =>{
    Alert.alert(
      'Servidor',
      'Tem certeza em definir o servidor ',
      [
        {text:'Sim', onPress:() => {setServidor(auxServidor), setModalVisible(!modalVisible)} },
        {text:'Não', onPress:() => console.log('Ação cancelada'),style:'cancel'},
      ],
      {cancelable:false}
    );
  };


  return (
    <View style={styles.container}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Servidor:</Text>
          <TextInput
            style={styles.inputServer }
            onChangeText={servidor => onChangeAuxServidor(servidor)}
            value={auxServidor}
    />
          <View style={styles.buttons}>   
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                onChangeAuxServidor(server);
              }}
              >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3", marginLeft:20 }}
              onPress={twoOptionAlertHandler}
              >
              <Text style={styles.textStyle}>Aplicar</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    </Modal>
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.action}
        onPress={() => {}}
        >
           <Text style={styles.actionText}>Importar Lista</Text>

        </TouchableOpacity>
  
        <TouchableOpacity style={styles.action}
          onPress={() => {setModalVisible(true)}}
          >
           <Text style={styles.actionText}>Definir Servidor</Text>

        </TouchableOpacity>
    
    </View>
  </View>
     
    


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop:20,
    
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  action:{
    marginBottom:10,
    backgroundColor:'#ECEDF4',
    borderRadius:5,
    paddingHorizontal:15,
    height: 75,
    width:'100%',
    justifyContent:'center',
    alignItems:"baseline",
    borderBottomWidth:3,
    borderBottomColor:'#D3D4D8'
  },
  actionText:{
    paddingLeft:20,
    color:'#000',
    fontSize:15,
    fontWeight:'bold',
  },
  inputServer:{
    height: 40, 
    backgroundColor: '#ECEDF4',
    borderRadius:10,
    marginBottom:20,
    paddingLeft:10,
    fontWeight:'bold',

  },
  buttons:{
    justifyContent:"flex-end",
    flexDirection:'row',
    
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width:'90%',
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize:15,
    
  }
});

