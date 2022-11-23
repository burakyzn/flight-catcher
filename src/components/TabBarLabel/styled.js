import styled from "styled-components/native";

const StyledText = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 10px;
  color: ${(props) =>
    props.focused ? props.theme.buttonColor : props.theme.tabBarColor};
`;

export { StyledText };
