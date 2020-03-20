import React from 'react';
import { View, Text, ToastAndroid, Alert} from 'react-native';

import { Icon,Button } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';
import {SettingsButton} from '../../components/SettingsButton'
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import MySettings from '../../pages/MySettings';






// import { Container } from './styles';



export default function HeaderButtonSend({navigation}) {
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


  const items = useSelector(state => state.items);

  async function pushToServer() {
    
    const response = await api.post('', items);
    if(response.status == 200){
      ToastAndroid.show('Coleta Enviada', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show('Erro ao enviar Coleta', ToastAndroid.LONG);

    }
    console.log(response.status);
  }
  return (
 
      <View style={{flexDirection: "row",alignItems:'baseline',height:50,}}>
        

        
      <Button type="clear" icon={<Icon name="send" color="white" />} onPress={twoOptionAlertHandler}
      
      />
      
      
      <View style={{paddingLeft:20, paddingRight:7}} >
      <Menu>
        <MenuTrigger >
          <Icon name="more-vert" color="white" />
          </MenuTrigger>
       <MenuOptions  >
          <MenuOption
            
           
            text="Configurações"
          />
        </MenuOptions>
      </Menu>
    </View>
    </View>
    
  );
}
