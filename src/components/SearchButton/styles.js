
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';



export const HeaderContainer = styled.View`
  flex-direction: row;
  
`;
const DEVICE_WIDTH = Dimensions.get(`window`).width;

 export default StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'transparent',
      
  },
  header: {
      paddingLeft:10,
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: DEVICE_WIDTH,
      height: 68,
      marginBottom: 6,
      backgroundColor: 'transparent'
  },
});