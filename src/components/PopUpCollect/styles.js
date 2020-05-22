import {StyleSheet} from 'react-native';


export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttons:{
        justifyContent:"flex-end",
        flexDirection:'row',
        
      },
      openButton: {  
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
      
      textStyle: {
        color: "#2196F3",
        fontWeight: "bold",
        textAlign: "left"
      },
      modalText: {
        marginBottom: 30,
        textAlign: "center",
        fontSize:20,
        fontWeight:"bold"
        
      },
      inputColeta:{
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