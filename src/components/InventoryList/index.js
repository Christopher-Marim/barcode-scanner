import React, { useState } from 'react';
import { 
   View,
   Text,
   TouchableHighlight,
   TextInput
   } from 'react-native';

import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { TouchableOpacity  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {Overlay} from 'react-native-elements';


import {
  Menu,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

import styles from './styles';

import {
  DescriptionView,
  ItemContainer,
  TextDescription,
  TextCode
} from './styles';

export default function Inventory({ itemsQuantity, currentInventory, name, creationDate}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [moreOpened, setMoreOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [collectName, setCollectName] = useState("");
  const [inDescription, setInDescription] = useState('');

  function removeItem(code) {
    setInputQty(inputQty - 1);
    dispatch({ type: 'REMOVE_ITEM', inventories:[currentInventory] });
  }

  function handleRenameCollect() {
    
    dispatch({ type: 'SET_DESCRIPTION', inventories: [currentInventory, collectName] }) ;
  }

  function handleDeleteCollect(){

    dispatch({ type: 'REMOVE_COLLECT', inventories:[currentInventory] });
  }

 
  function navigateToCollect(){
    dispatch({ type: 'SET_CURRENT_INVENTORY', idToShow: currentInventory });
    navigation.navigate('Collect');
  }

  function hideMenu(){
    setMoreOpened(false);
  }

  function showModal(){
    setModalOpened(!modalOpened);
  }
  
  return (<View>
    <View styles={styles.containerOverlay}>
    <Overlay height={150}
          isVisible={modalOpened}
          onBackdropPress={()=> {setModalOpened(false)}}
          >
           <View style={styles.modalView}>
            <Text style={styles.modalText}>Renomear Coleta</Text>
              <TextInput
                style={styles.inputColetaOverlay }
                placeholder='Nome da Coleta'
                onChangeText={coleta => setCollectName(coleta)}
               />

                <View style={styles.buttonsOverlay}>   
                  <TouchableHighlight
                    style={{ ...styles.openButton,  }}
                    onPress={()=>{setModalOpened(false)}}
                    >
                      <Text style={styles.textStyleOverlay}>Cancelar</Text>
                  </TouchableHighlight>
                      
                  <TouchableHighlight
                    style={{ ...styles.openButton, marginLeft:20 }}
                    onPress={() => {
                      handleRenameCollect();
                      
                    }}
                    onPressOut={()=>{setModalOpened(false)}}
                    >
                    <Text style={styles.textStyleOverlay}>Renomear</Text>
                  </TouchableHighlight>
                </View>
             </View>
        </Overlay>
        </View>
    <View style={styles.container}>
    
      
      
      <View style={styles.containerMoreButton}>

        <Menu style={{paddingTop:8}} 
        opened={moreOpened}
        onBackdropPress={hideMenu}
        >
          <MenuTrigger 
             onPress={() => {setMoreOpened(true)}}>
            <Icon name="more-vert" color="grey" size={25} />
          </MenuTrigger>

          <MenuOptions >
            <TouchableOpacity 
            style={styles.actionMenu}
            onPress={() => {setMoreOpened(!moreOpened), setModalOpened(true)}}
            >
              <Text style={styles.actionTextMenu}>
                    Renomear
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionMenu} 
            onPress={() => {setMoreOpened(!moreOpened), handleDeleteCollect()}}
            >
              <Text style={styles.actionTextMenu}>
                 Excluir
              </Text>
            </TouchableOpacity>

          </MenuOptions>
          
        </Menu>
        
     </View>

    <TouchableOpacity
      disabled={moreOpened}
      onPress={navigateToCollect}
      onLongPress={showModal}
    >
        <ItemContainer>
            <DescriptionView>
              <TextDescription>{name}</TextDescription>
              <View style={styles.positionTextList}>
              <TextCode>Data: {creationDate}</TextCode>
              <Text style={styles.textColetas} >Coletas: {itemsQuantity}</Text>
              </View>
            </DescriptionView>
            
        </ItemContainer>
    </TouchableOpacity>
  </View>
  </View>
  
  );
}



// Exluir 
{/* <View>
      <View style={{alignItems: 'flex-end' }}>
          <TrashButton onPress={() => removeItem(codigo)}>
            <Icon name="delete" color="white" />
          </TrashButton>
        </View>
      </View> */}