import React, {useState, useRef } from 'react';
import { View, Text, ToastAndroid, Alert, Dimensions} from 'react-native';

import { Icon,Button } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import { TouchableOpacity  } from 'react-native-gesture-handler';

import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import api from '../../services/api';
import { useSelector } from 'react-redux';

import MySettings from '../../pages/MySettings';
import styles from './styles';

// import { Container } from './styles';

export default function HeaderButtons() {

  const [moreOpened, setMoreOpened] = useState(false);
  const navigation = useNavigation();
  const items = useSelector(state => state.inventories);
  const server = useSelector(state => state.server);
  twoOptionAlertHandler = () =>{
    Alert.alert(
      'Enviar ao servidor',
      'Tudo certo para enviar ao servidor?',
      [
        {text:'Sim', onPress:() => pushToServer() },
        {text:'Não', onPress:() => console.log('Ação cancelada'),style:'cancel',},
      ],
      {cancelable:false}
    );
  };

  async function pushToServer() {
    
    const response = await api.post(server, items);
    if(response.status == 200){
      ToastAndroid.show('Coleta Enviada', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show('Erro ao enviar Coleta', ToastAndroid.LONG);

    }
    console.log(response.status);
  }

  function showSearch(){
    
  }

  return (
    <View>
      
     <View style={{flexDirection: "row",alignItems:'baseline',height:45,}}>
      <Button type="clear" 
       icon={<Icon name="send" color="white" />} 
       onPress={twoOptionAlertHandler}
      />
      
      <View style={{paddingLeft:20, paddingRight:7}} >
        <Menu opened={moreOpened}
        onBackdropPress={()=> setMoreOpened(false)}
        
        >
          <MenuTrigger 
             onPress={() => {setMoreOpened(true)}}>
            <Icon name="more-vert" color="white" />
            
          </MenuTrigger>

          <MenuOptions >
          
          <TouchableOpacity 
          style={styles.action}
                
               onPress={() => {navigation.navigate('MySettings'),setMoreOpened(!moreOpened)} }>
                 
                <Text style={styles.actionText}>
                  Configuracões
                </Text>
             </TouchableOpacity>

          </MenuOptions>
        </Menu>

        
      </View>


      </View>
      </View>
    
  );
}