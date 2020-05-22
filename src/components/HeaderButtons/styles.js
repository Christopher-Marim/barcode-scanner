import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const HeaderContainer = styled.View`
  flex-direction: row;
`;

export default StyleSheet.create({

  action:{
    backgroundColor:'#fff',
    borderRadius:5,
    paddingHorizontal:15,
    height: 30,
    width:'100%',
    justifyContent:'center',
    alignItems:"center",
   
  },
  actionText:{
    color:'#000',
    fontSize:15,
    fontWeight:'500',

  },

})