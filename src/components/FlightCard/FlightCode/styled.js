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

const Code = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.textColor};
`;

const Time = styled.Text`
  font-family: Inter_500Medium;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.labelColor};
`;

export { Container, Wrapper, Code, Time };
