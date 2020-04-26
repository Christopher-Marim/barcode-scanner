import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import {
  ItemContainer,
  InputDescription,
  InputQuantity,
  DescriptionView,
  AddButton,
  RemoveButton,
  QuantityView,
  TextCode,
  TrashButton,
} from './styles';

export default function Item({ collectName, collectDate }) {
  const dispatch = useDispatch();

  const [inDescription, setInDescription] = useState('');
  const items = useSelector(state => state.items);
  // var strQty = ;
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    setInputQty(quantidade);
  }, [quantidade]);

//   function removeItem(code) {
//     setInputQty(inputQty - 1);
//     dispatch({ type: 'REMOVE_INVENTORY', item: code });
//   }

//   function handleSetDescription() {
//     dispatch({ type: 'SET_COLLECTNAME', item: [codigo, inDescription] });
//   }

  return (
    <ItemContainer>
      <DescriptionView>
        <InputDescription
          autoCorrect={false}
          placeholder="Adicionar Nome da Coleta"
          value={collectName}
          onChangeText={text => setInDescription(text)}
          onBlur={handleSetDescription}
        />
        <TextCode>{collectDate}</TextCode>
      </DescriptionView>

      <QuantityView>
        <View style={{ alignItems: 'flex-end' }}>
          <TrashButton /*onPress={() => removeItem(codigo)}*/>
            <Icon name="delete" color="white" />
          </TrashButton>
        </View>
      </QuantityView>
    </ItemContainer>
  );
}
