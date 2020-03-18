import React from 'react';
import { StyleSheet, View, Button, Text, Picker} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function Home({ navigation }) {
  return (
     <MenuContext>
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Realizar consulta"
        onPress={() => navigation.navigate('Scanner')}
      >
        <Text>Realizar consulta</Text>
      </Button>
     
    <View>
      <Menu>
        <MenuTrigger text="Open menu" />

        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: 'red' }}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          />
        </MenuOptions>
      </Menu>
    </View>
    </View>
</MenuContext>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#0027FF',
  },
});
