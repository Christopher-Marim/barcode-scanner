import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  ItemContainer,
  TextDescription,
  InputQuantity,
  DescriptionView,
  AddButton,
  RemoveButton,
  QuantityView,
  TextCode,
  TrashButton,
} from './styles';

export default function Item({ description, codigo, quantidade }) {
  const dispatch = useDispatch();
  const [inputQty, setInputQty] = useState(quantidade);
  const [inDescription, setInDescription] = useState('');
  const items = useSelector(state => state.items);
  // var strQty = ;
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    setInputQty(quantidade);
  }, [quantidade]);

  function increaseQty(code) {
    setInputQty(inputQty + 1);
    dispatch({ type: 'INCREASE_QUANTITY', item: code });
  }

  function decreaseQty(code) {
    setInputQty(inputQty - 1);
    dispatch({ type: 'DECREASE_QUANTITY', item: code });
  }

  function removeItem(code) {
    setInputQty(inputQty - 1);
    dispatch({ type: 'REMOVE_ITEM', item: code });
  }

  function handleSetQty() {
    dispatch({ type: 'SET_QUANTITY', item: [codigo, inputQty] });
  }

  function handleSetDescription() {
    dispatch({ type: 'SET_DESCRIPTION', item: [codigo, inDescription] });
  }

  return (
    <ItemContainer>
      <DescriptionView>
        <TextDescription>{description}</TextDescription>
        <TextCode>{codigo}</TextCode>
      </DescriptionView>

      <QuantityView>
        <View>
          <RemoveButton onPress={() => decreaseQty(codigo)}>
            <Icon name="remove" color="white" />
          </RemoveButton>
        </View>

        <InputQuantity
          editable={true}
          onChangeText={text => setInputQty(text)}
          onBlur={handleSetQty}
          value={inputQty.toString()}
          keyboardType={'numeric'}
        />
        <View style={{ paddingRight: 230 }}>
          <AddButton onPress={() => increaseQty(codigo)}>
            <Icon name="add" color="white" />
          </AddButton>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TrashButton onPress={() => removeItem(codigo)}>
            <Icon name="delete" color="white" />
          </TrashButton>
        </View>
      </QuantityView>
    </ItemContainer>
  );
}
