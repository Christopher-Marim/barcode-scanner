import React, {useState} from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  TextInput
} from "react-native";
import {useDispatch} from 'react-redux';
import {Overlay} from 'react-native-elements';
import styles from './styles'

export default function PopUpCollect(props){
    const dispatch = useDispatch();    
    const [collectName, setCollectName] = useState("");
    
    function hidePopUp(){
      dispatch({ type: 'SHOWPOPUP', value: false });
    }
    
    function createCollect(name){
      const d = new Date;
      const date = d.getDate() + '/' + (d.getMonth() +1) + '/' + d.getFullYear();

      dispatch({type: 'NEW_COLLECT', inventory: [name, date]});
    }

    return(
        <Overlay height={200}
          isVisible={props.isButtonPressed}
          onBackdropPress={hidePopUp}
          >
           <View style={styles.modalView}>
            <Text style={styles.modalText}>Criar Coleta</Text>
              <TextInput
                style={styles.inputColeta }
                placeholder='Nome da Coleta'
                onChangeText={coleta => setCollectName(coleta)}
               />

                <View style={styles.buttons}>   
                  <TouchableHighlight
                    style={{ ...styles.openButton,  }}
                    onPress={hidePopUp}
                    >
                      <Text style={styles.textStyle}>Cancelar</Text>
                  </TouchableHighlight>
                      
                  <TouchableHighlight
                    style={{ ...styles.openButton, marginLeft:20 }}
                    onPress={() => {
                      createCollect(collectName);
                      
                    }}
                    onPressOut={hidePopUp}
                    >
                    <Text style={styles.textStyle}>Criar</Text>
                  </TouchableHighlight>
                </View>
             </View>
        </Overlay>

    );
}