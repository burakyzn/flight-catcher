import styled from 'styled-components/native';
import { Platform } from 'react-native';

export default function TabBarLabel({ focused, text }) {
  return <Text focused={focused} platform={Platform.OS}>{text}</Text>
}

const Text = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 10px;
  color: ${props => props.focused ? '#FFF' : '#FAD3CA'};
  bottom: ${props => props.platform === 'android' ? "10px" : 0};
`;