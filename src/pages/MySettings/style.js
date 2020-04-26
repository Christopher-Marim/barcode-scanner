import {StyleSheet} from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingTop:5,
        
        
        alignItems: 'stretch',
        justifyContent: 'flex-start',
      },
      containerButtons:{
        padding:0,
        borderRadius:50
      },
      action:{
        marginBottom:0,
        backgroundColor:'white',
        borderRadius:0,
        paddingHorizontal:15,
        height: 55,
        width:'100%',
        justifyContent:'center',
        alignItems:"baseline",
        borderBottomWidth:2,
        borderBottomColor:'#D3D4D8',
        borderLeftWidth:5,
        borderLeftColor:'#012554'
      },
      actionText:{
        paddingLeft:20,
        color:'#000',
        fontSize:15,
        fontWeight:'bold',
      },
      inputServer:{
        height: 40, 
        backgroundColor: '#ECEDF4',
        borderRadius:10,
        marginBottom:20,
        paddingLeft:10,
        fontWeight:'bold',
    
      },
      buttons:{
        justifyContent:"flex-end",
        flexDirection:'row',
        
      },
      openButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        width:'90%',
        alignItems: "stretch",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "left"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "left",
        fontSize:15,
        
      }

})