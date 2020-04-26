import React, {useState} from 'react';

import {
  Text,
  TouchableHighlight,
  View,
  TextInput, 
  FlatList,
  SafeAreaView
} from "react-native";
import {Overlay} from 'react-native-elements';

export default function PopUpCollect(){

    const [moreOpened, setMoreOpened] = useState(true);
    const [buttonVisible, setButVisible] = useState(1);
    const [auxColeta, onChangeAuxColeta] = React.useState("");
    const [newcoleta, setColeta] = useState();
    return(
        <Overlay height={200}
          isVisible={moreOpened}
          onBackdropPress={() => setMoreOpened(!moreOpened)}
          >
           <View style={styles.modalView}>
            <Text style={styles.modalText}>Criar Coleta</Text>
              <TextInput
                style={styles.inputColeta }
                placeholder='Nome da Coleta'
                onChangeText={coleta => onChangeAuxColeta(coleta)}
                value={auxColeta}/>

                <View style={styles.buttons}>   
                  <TouchableHighlight
                    style={{ ...styles.openButton,  }}
                    onPress={() => {
                    setMoreOpened(!moreOpened);
                    onChangeAuxColeta("");}}
                    >
                      <Text style={styles.textStyle}>Cancelar</Text>
                  </TouchableHighlight>
                      
                  <TouchableHighlight
                    style={{ ...styles.openButton, marginLeft:20 }}
                    onPress={() => {
                      setColeta(auxColeta),
                      onChangeAuxColeta(""),
                      setMoreOpened(!moreOpened),
                      setButVisible(0)
                    }}
                    >
                    <Text style={styles.textStyle}>Criar</Text>
                  </TouchableHighlight>
                </View>
             </View>
        </Overlay>

    );
}