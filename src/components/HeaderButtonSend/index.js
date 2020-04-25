import React, {useState} from 'react';
import { View, Text, ToastAndroid, Alert} from 'react-native';

import { Icon,Button } from 'react-native-elements';
import { useNavigation} from '@react-navigation/native';
import { TouchableOpacity  } from 'react-native-gesture-handler';
import {SettingsButton} from '../../components/SettingsButton'
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

export default function HeaderButtonSend() {

  const [moreOpened, setMoreOpened] = useState(false);

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

const navigation = useNavigation();


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
      <Button type="clear" 
       icon={<Icon name="send" color="white" />} 
       onPress={twoOptionAlertHandler}
      />
      
      <View style={{paddingLeft:20, paddingRight:7}} >
        <Menu opened={moreOpened}
        >
          <MenuTrigger 
             onPress={() => {setMoreOpened(true)}}>
            <Icon name="more-vert" color="white" />
            
          </MenuTrigger>

          <MenuOptions >
          
          <TouchableOpacity style={styles.action}
              
               onPress={() => {navigation.navigate('MySettings'),setMoreOpened(!moreOpened)} }>
                 
                <Text style={styles.actionText}>
                  Configuracões
                </Text>
             </TouchableOpacity>

          </MenuOptions>
        </Menu>
      </View>

      </View>
    
  );
}

