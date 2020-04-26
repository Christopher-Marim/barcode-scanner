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
    const [moreOpened, setMoreOpened] = useState(true);
    const [auxColeta, onChangeAuxColeta] = useState("");
    const [newcoleta, setColeta] = useState();  
    
    function hidePopUp(){
      dispatch({ type: 'SHOWPOPUP', value: false });
    }
    
    function createCollect(){

    }

    return(
        <Overlay height={200}
          isVisible={props.isButtonPressed}
          onBackdropPress={true}
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
                    onPress={hidePopUp}
                    >
                      <Text style={styles.textStyle}>Cancelar</Text>
                  </TouchableHighlight>
                      
                  <TouchableHighlight
                    style={{ ...styles.openButton, marginLeft:20 }}
                    onPress={() => {
                      setColeta(auxColeta),
                      onChangeAuxColeta(""),
                      hidePopUp
                    }}
                    >
                    <Text style={styles.textStyle}>Criar</Text>
                  </TouchableHighlight>
                </View>
             </View>
        </Overlay>

    );
}