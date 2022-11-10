import styled from "styled-components/native";
import supportedOS from "../../constants/supportedOS";
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
  color: ${(props) =>
    props.focused ? props.theme.buttonColor : props.theme.tabBarColor};
  ${(props) => props.platform === supportedOS.android && "bottom: 10px"};
`;
