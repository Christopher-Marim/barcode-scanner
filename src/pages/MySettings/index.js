import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput 
} from "react-native";

import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';



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

