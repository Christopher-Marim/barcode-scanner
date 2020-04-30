import React, { useState, useEffect } from 'react';
import { 
  View,
   TouchableWithoutFeedback, 
   Text, 
   Alert,
   TouchableHighlight } from 'react-native';

import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { TouchableOpacity  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Toast from '../Toast'

import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

import styles from './styles';

import {
  DescriptionView,
  ItemContainer,
  TextDescription,
  TrashButton,
  TextCode
} from './styles';

export default function Inventory({ currentInventory, name, creationDate }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [moreOpened, setMoreOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  

  const [inDescription, setInDescription] = useState('');

  function removeItem(code) {
    setInputQty(inputQty - 1);
    dispatch({ type: 'REMOVE_ITEM', inventories: code });
  }

  function handleSetDescription() {
    
    dispatch({ type: 'SET_DESCRIPTION', inventories: [codigo, inDescription] });
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
    {/* <View >
      <Modal 
        animationIn='fadeIn'
        transparent={true}
        isVisible={modalOpened}
        style={{margin:0, padding:0, flex:1}}
        backdropOpacity={0}
        coverScreen={true}
      //  onBackdropPress={()=> this.setState({isVisible=false})}
        
        
        
        
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Servidor:</Text>
            <View style={styles.buttons}>   
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#354EB0" }}
              onPress={() => {
                setModalOpened(false);
                
              }}
              >
              <Text style={styles.textStyle}>Cancelar</Text>
            </TouchableHighlight>
            </View>
            
          </View>
        </View>
      </Modal>
      </View> */}
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
            onPress={() => {setMoreOpened(!moreOpened)}}
            >
              <Text style={styles.actionTextMenu}>
                    Renomear
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionMenu} 
            onPress={() => {setMoreOpened(!moreOpened)}}
            >
              <Text style={styles.actionTextMenu}>
                 Excluir
              </Text>
            </TouchableOpacity>

          </MenuOptions>
          
        </Menu>
        
     </View>

     <Toast></Toast>

    <TouchableOpacity
      disabled={moreOpened}
      onPress={navigateToCollect}
      onLongPress={headerToast}
    >
        <ItemContainer>
            <DescriptionView>
              <TextDescription>{name}</TextDescription>
              <View style={styles.positionTextList}>
              <TextCode>Data: {creationDate}</TextCode>
              <Text style={styles.textColetas} >Coletas: X</Text>
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