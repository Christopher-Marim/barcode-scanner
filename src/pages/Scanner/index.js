import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {AsyncStorage} from 'react-native';
import {_setBarcode} from '../../services/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState(0);

  // useEffect(() => {
  //     async function save(){
  //        try{
  //          await AsyncStorage.setItem('@inventory_item', barcode)
  //          //alert('Data was saved!');
  //          console.log('mudou estado do barcode chamando save');
  //        } catch(e){
  //          alert('Failed to save data!');
  //        } 
  //     }
      
  //     save();
  // }, [barcode])

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //const bar__code = data;
    _setBarcode(data);
   
    navigation.navigate('Collect');
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}