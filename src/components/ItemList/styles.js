import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ItemContainer = styled.View`
  height: 100px;
  flex-direction: column;
  align-items: flex-start;
  border-left-width: 2px;
  border-color: blue;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: white;
`;

export const DescriptionView = styled.View`
  flex: 1;
`;

export const QuantityView = styled.View`
  flex-direction: row;
`;

export const InputDescription = styled.TextInput`
  font-size: 20px;
`;

export const InputQuantity = styled.TextInput`
  font-size: 18px;
  width: 40px;
  justify-content: center;
`;

export const TextCode = styled.Text`
  font-size: 15px;
`;

export const AddButton = styled(RectButton)`
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background: green;
`;

export const RemoveButton = styled(RectButton)`
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background: red;
`;

export const TrashButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 50px;
`;
