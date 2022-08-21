import styled from 'styled-components/native';
import { Text } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const View = styled.View`
  flex: 1;
  background-color: #fff;
  align-items : center;
  justify-content: center;
`;
