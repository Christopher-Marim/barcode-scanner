import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';

import {
  DescriptionView,
  ItemContainer,
  TextDescription,
  TrashButton,
  TextCode
} from './styles';

export default function Inventory({ nav, name, creationDate }) {
  const dispatch = useDispatch();

  const [inDescription, setInDescription] = useState('');

  function removeItem(code) {
    setInputQty(inputQty - 1);
    dispatch({ type: 'REMOVE_ITEM', inventories: code });
  }

  function handleSetDescription() {
    dispatch({ type: 'SET_DESCRIPTION', inventories: [codigo, inDescription] });
  }


  return (
    <ItemContainer>
      
      <DescriptionView>
        <TextDescription>{name}</TextDescription>
        <TextCode>{creationDate}</TextCode>
      </DescriptionView>
      <View>
      <View style={{alignItems: 'flex-end' }}>
          <TrashButton onPress={() => removeItem(codigo)}>
            <Icon name="delete" color="white" />
          </TrashButton>
        </View>
      </View>
      
    </ItemContainer>
  );
}