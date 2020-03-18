import React from 'react';
import { View } from 'react-native';
import {
    MenuContext,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

// import { Container } from './styles';

export default function SettingsButton() {
  return (
    <View>
        <MenuContext>
    <View>
      <Menu>
        <MenuTrigger>
          <Icon name="more-vert" color="white"/>
          </MenuTrigger> 

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
</MenuContext>
    </View>
    
  );
}
