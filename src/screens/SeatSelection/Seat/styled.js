import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  width: 40px;
  margin: 10px 0 10px 0;
`;

const StyledText = styled.Text`
  font-size: 16px;
  line-height: 40px;
  border-radius: 4px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.theme.labelColor)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(59, 119, 220, 0.05)"};
`;

export { Container, StyledText };
