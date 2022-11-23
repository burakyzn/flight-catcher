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

const Time = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
  ${(props) => props.textAlign && `text-align : ${props.textAlign}`}
`;

const Location = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.labelColor};
`;

export { Container, Wrapper, Time, Location };
