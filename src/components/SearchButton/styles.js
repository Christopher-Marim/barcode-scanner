import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const DEVICE_WIDTH = Dimensions.get(`window`).width;

 export default StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      
  },
  header: {
      paddingLeft:10,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: DEVICE_WIDTH,
      height: 68,
      marginBottom: 0,
      backgroundColor: 'transparent'
  },
});