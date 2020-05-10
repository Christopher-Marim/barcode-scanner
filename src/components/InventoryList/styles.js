import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

export const ItemContainer = styled.View`
flex:1;
  height: 100px;
  flex-direction: row-reverse;
  align-items: flex-start;
  border-left-width: 4px;
  border-color: #012554;
  margin-bottom: 5px;
  padding-top:10px;
  background-color: white;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
 
`;

export const DescriptionView = styled.View`
  flex: 1;
  
`;

export const TextDescription = styled.Text`
  padding-left:15px;
  font-size: 20px;
`;

export const TextCode = styled.Text`
  color: grey;
  padding-top:20px;
  padding-left:15px;
  font-size: 15px;
`;

export const TrashButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 50px;
`;

export default StyleSheet.create({
  containerMoreButton:{
    flex:1,
    zIndex:1,
    position:"absolute",
    alignItems:'flex-end',
    left:350,
    
  },
  container:{
    flex:1,
    flexDirection:"column",
    
  },

  action:{
    backfaceVisibility:"hidden",
    
    
    borderRadius:5,
    height: 40,
    width:30,
    justifyContent:'center',
    alignItems:"center",
   
  },
  actionText:{
    color:'#000',
    fontSize:20,
    fontWeight:'500',

  },
  positionTextList:{
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  textColetas:{
    paddingTop:20,
    paddingRight: 30,
    color:'grey',
    fontSize: 15,
  },
  actionMenu:{
    backgroundColor:'#fff',
    borderRadius:5,
    paddingHorizontal:15,
    height: 40,
    width:'100%',
    justifyContent:'center',
    alignItems:"center",
    borderBottomWidth:0.5,
    borderBottomColor:'grey'
   
  },
  actionTextMenu:{
    color:'#000',
    fontSize:15,
    fontWeight:'500',

  },
  
 
  containerOverlay: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsOverlay:{
    justifyContent:"flex-end",
    flexDirection:'row',
    
  },
  openButtonOverlay: {  
    borderRadius: 10,
    padding: 8,
    paddingHorizontal:20,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    padding: 0,
    width:'94.5%',
    alignItems: "stretch",
  },
  
  textStyleOverlay: {
    
    color: "#2196F3",
    fontWeight: "bold",
    textAlign: "left"
  },
  modalTextOverlay: {
    marginBottom: 30,
    textAlign: "center",
    fontSize:20,
    fontWeight:"bold"
    
  },
  inputColetaOverlay:{
    height: 40, 
    backgroundColor: '#fff',
    borderRadius:10,
    marginBottom:20,
    paddingLeft:10,
    fontWeight:'500',
    borderBottomWidth:3,
    borderBottomColor:'#D3D4D8'

  },

})