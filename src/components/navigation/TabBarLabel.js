import styled from "styled-components/native";
import supportedOS from "../../contants/supportedOS";
import { Platform } from "react-native";

export default function TabBarLabel({ focused, text }) {
  return (
    <Text focused={focused} platform={Platform.OS}>
      {text}
    </Text>
  );
}

const Text = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 10px;
  color: ${(props) => (props.focused ? "#FFFFFF" : "#FAD3CA")};
  ${(props) => props.platform === supportedOS.android && "bottom: 10px"};
`;
