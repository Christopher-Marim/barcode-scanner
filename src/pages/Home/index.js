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

import {Overlay} from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PopUpNewCollect from '../../components/PopUpCollect';

import styles from './style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dale',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dele',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Doli',
  },
];



export default function Home({ navigation }) {

  function Item({ title }) {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => navigation.navigate("Collect")}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  const [moreOpened, setMoreOpened] = useState(false);
  const [criarDisable, setCriarDisable] = React.useState(true);
  const [buttonVisible, setButVisible] = useState(1);
  const [auxColeta, onChangeAuxColeta] = React.useState("");
  const [newcoleta, setColeta] = useState("");

  //FAZER ISSO FUNCIONAR PARA DIMINUIR O CÓDIGO DO POP UP

  function pop(){
    return(
      <PopUpNewCollect></PopUpNewCollect>
    );
   
  }
  
  //NÃO CONSEGUI CHAMAR O ONPRESS={POP} 

  if(buttonVisible == 0){
    
    return(
      <SafeAreaView style={styles.container1}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Overlay height={200}
          isVisible={moreOpened}
          onBackdropPress={() => setMoreOpened(!moreOpened)}
          >
           <View style={styles.modalView}>
            <Text style={styles.modalText}>Criar Coleta</Text>
              <TextInput
                style={styles.inputColeta }
                placeholder='Nome da Coleta'
                onChangeText={coleta => {onChangeAuxColeta(coleta),setCriarDisable(false)}}
                value={auxColeta}/>

                <View style={styles.buttons}>   
                  <TouchableHighlight
                    style={{ ...styles.openButton,  }}
                    onPress={() => {
                    setMoreOpened(!moreOpened),
                    setCriarDisable(true),
                    onChangeAuxColeta("");}}
                    >
                      <Text style={styles.textStyle}>Cancelar</Text>
                  </TouchableHighlight>
                      
                  <TouchableHighlight
                    disabled={criarDisable}
                    style={{ ...styles.openButton, marginLeft:20 }}
                    onPress={() => {
                      setColeta(auxColeta),
                      onChangeAuxColeta(""),
                      setMoreOpened(!moreOpened),
                      setCriarDisable(true)
                    }}
                    >
                    <Text style={styles.textStyle}>Criar</Text>
                  </TouchableHighlight>
                </View>
             </View>
        </Overlay>
      <View style={styles.positionButtonMore}>
        <TouchableOpacity style={styles.buttonMore}>
            <Text style={styles.textButtonMore}
                  onPress={() =>setMoreOpened(!moreOpened)}
                  >+</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>

    );
    
  }
else{
  return (
     
    <View style={styles.container} >

      <View style={styles.actions}>
              
        <Overlay height={200}
          isVisible={moreOpened}
          onBackdropPress={() => setMoreOpened(!moreOpened)}
          >
           <View style={styles.modalView}>
            <Text style={styles.modalText}>Criar Coleta</Text>
              <TextInput
                style={styles.inputColeta }
                placeholder='Nome da Coleta'
                onChangeText={coleta => {onChangeAuxColeta(coleta),setCriarDisable(false)}}
                value={auxColeta}/>

                <View style={styles.buttons}>   
                  <TouchableHighlight
                    style={{ ...styles.openButton,  }}
                    onPress={() => {
                    setMoreOpened(!moreOpened);
                    onChangeAuxColeta(""),
                    setCriarDisable(true);}}
                    >
                      <Text style={styles.textStyle}>Cancelar</Text>
                  </TouchableHighlight>
                      
                  <TouchableHighlight
                  disabled={criarDisable}
                    style={{ ...styles.openButton, marginLeft:20 }}
                    onPress={() => {
                      setColeta(auxColeta),
                      onChangeAuxColeta(""),
                      setMoreOpened(!moreOpened),
                      setButVisible(0),
                      setCriarDisable(true)
                    }}
                    >
                    <Text style={styles.textStyle}>Criar</Text>
                  </TouchableHighlight>
                </View>
             </View>
        </Overlay>
         
        <TouchableOpacity 
        style={styles.action}     
           onPress={() =>setMoreOpened(!moreOpened)}>
           <  Text style={styles.actionText}>Criar Coleta</Text>
        </TouchableOpacity>
                   
        
        
      </View>
     
    </View>
  );
}
}
