import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.textColor};
  font-family: Inter_500Medium;
`;

const StyledTextInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-bottom-width: 0.75px;
  border-bottom-color: ${(props) => props.theme.buttonBorder};
  font-family: Inter_300Light;
`;

export { Container, Label, StyledTextInput };
