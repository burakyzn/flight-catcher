import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  margin: 20px 0 20px 0;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Circle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const StyledText = styled.Text`
  color: ${(props) => props.theme.labelColor};
  font-size: 14px;
  margin-left: 5px;
  line-height: 22px;
  margin-right: 10px;
  font-family: Inter_400Regular;
`;

export { Container, Wrapper, Circle, StyledText };
