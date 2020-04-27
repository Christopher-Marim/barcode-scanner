import {StyleSheet} from 'react-native';


export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      list: {
        paddingHorizontal: 20,
      },
      action:{
        backgroundColor:'#012554',
        borderRadius:5,
        paddingHorizontal:35,
        height: 45,
        width:'100%',
        justifyContent:'center',
        alignItems:"center",
      },
      actionText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
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

    //   Itens Coleta

    container1: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      
      },
      item: {
        backgroundColor: '#012554',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
       color:"white",
        fontSize: 32,
      },
      buttonMore:{
        backgroundColor:'#012554',
        borderRadius:100,
        paddingHorizontal:22,
        height: 60,
        width:'20%',
        justifyContent:'center',
        alignItems:"center",
      },
      fabAdd:{
        backgroundColor:'#012554',
        borderRadius:100,
        height: 60,
        width: 60,
        position: 'absolute',
        bottom: 0,
        right: 0, 
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
      },
      textButtonMore:{
            fontWeight:"bold", 
            color:'white', 
            fontSize:35, 
           

      }
   
    
})