// const React = require('react');
// const { View, Text, StyleSheet, TouchableOpacity } = require('react-native');

// const Navigation = require('../services/Navigation');

// const Toast = function ({componentId}) {
//   return (
//     <View style={styles.root}>
//       <View style={styles.toast}>
//         <Text style={styles.text}>This a very important message!</Text>
//         <TouchableOpacity style={styles.button} onPress={() => Navigation.dismissOverlay(componentId)}>
//           <Text style={styles.buttonText}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     flexDirection: 'column-reverse',
//   },
//   toast: {
//     elevation: 2,
//     flexDirection: 'row',
//     height: 40,
//     margin: 16,
//     borderRadius: 20,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   },
//   text: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 16
//   },
//   button: {
//     marginRight: 16
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold'
//   }
// });

// Toast.options = {
//   layout: {
//     componentBackgroundColor: 'transparent'
//   },
//   overlay: {
//     interceptTouchOutside: false
//   }
// }

// module.exports = Toast;