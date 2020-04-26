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

export const TextDescription = styled.Text`
  font-size: 20px;
`;

export const TextCode = styled.Text`
  font-size: 15px;
`;

export const TrashButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 50px;
`;
