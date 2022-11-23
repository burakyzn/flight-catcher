import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0 16px 0;
`;

const Wrapper = styled.View`
  justify-content: center;
`;

const StyledText = styled.Text`
  font-family: Inter_400Regular;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.labelColor};
`;

const Value = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
`;

export { Container, Wrapper, StyledText, Value };
