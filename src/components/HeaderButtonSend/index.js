import React from 'react';
import { View, Text, ToastAndroid} from 'react-native';

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




// import { Container } from './styles';



export default function HeaderButtonSend() {
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
 
      <View style={{flexDirection: "row"}}>
      <Button type="clear" icon={<Icon name="send" color="white"/>} onPress={() => pushToServer()}/>
      
      <View>
      <Menu>
        <MenuTrigger>
          <Icon name="more-vert" color="white"/>

          </MenuTrigger>

        <MenuOptions>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
           <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: 'red' }}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu>
    </View>
    </View>
    
  );
}
