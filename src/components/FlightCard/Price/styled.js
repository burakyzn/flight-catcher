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
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.labelColor};
`;

const Value = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 22px;
  line-height: 27px;
  text-align: right;
  color: ${(props) => props.theme.textColorSecondary};
`;

export { Container, Wrapper, StyledText, Value };
