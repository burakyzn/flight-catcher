import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Number = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  font-family: Inter_500Medium;
  color: ${(props) =>
    props.disabled ? props.theme.disabled : props.theme.labelColorSecondary};
`;

const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 50px;
  ${(props) =>
    props.disabled &&
    `border: 1px solid ${
      props.disabled ? props.theme.disabled : props.theme.labelColorSecondary
    }`}
`;

export { Container, Number, Text, Button };
