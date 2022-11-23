import styled from "styled-components/native";

const View = styled.View`
  height: 300px;
  padding: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  border-radius: 16px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0 16px 0;
`;

const Column = styled.View`
  justify-content: center;
`;

const Code = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.textColor};
`;

const FlightTime = styled.Text`
  font-family: Inter_500Medium;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.labelColor};
`;

const Time = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
  ${(props) => props.textAlign && `text-align : ${props.textAlign}`}
`;

const Location = styled.Text`
  font-family: Inter_500Medium;
  font-size: 12px;
  line-height: 12px;
  color: ${(props) => props.theme.labelColor};
`;

const CabinClass = styled.Text`
  font-family: Inter_400Regular;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.labelColor};
`;

const Price = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
`;

export {
  View,
  Wrapper,
  Row,
  Column,
  Code,
  FlightTime,
  Time,
  Location,
  CabinClass,
  Price,
};
