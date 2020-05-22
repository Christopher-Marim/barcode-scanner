import React, {useState, useEffect} from 'react';
import { View, Button, InputAccessoryView, ScrollView, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch  } from 'react-redux';
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
  const inputAccessoryViewID = 'uniqueID';
  const initialText = 'Placeholder Text';
  const [text, setText] = useState(initialText);
  const dispatch = useDispatch();
  const [inputQty, setInputQty] = useState(quantidade);
  useEffect(() => {
    setInputQty(quantidade);
  },[quantidade]);

  function increaseQty(code) {
    dispatch({ type: 'INCREASE_QUANTITY', item: code });
  }

  function decreaseQty(code) {
    dispatch({ type: 'DECREASE_QUANTITY', item: code });
  }

  function removeItem(code) {
    dispatch({ type: 'REMOVE_ITEM', item: code });
  }
 
  function handleSetQty() {
    dispatch({ type: 'SET_QUANTITY', item: [codigo, inputQty] });
  }

  function addTextInput(){
    // dispatch({ type: 'ADD_TEXTINPUT', });
  }

  return (<View>
 
    <ItemContainer>
      <DescriptionView>
        <TextDescription>{description}</TextDescription>
        <TextCode>{codigo}</TextCode>
      </DescriptionView>
      <View keyboardDismissMode="interactive">
        {/* <TextInput
          style={{
            paddingBottom:15
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={text => setText(text)}
          value={text}
        /> */}
        <Button title='+' onPress={() =>addTextInput()}>

        </Button>
      </View>

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
          keyboardType={'decimal-pad'}
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
    </View>
  );
}