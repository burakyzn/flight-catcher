import styled from "styled-components/native";
import AirplaneFlight from "../svg/AirplaneFlight";
import { FlightContext } from "../../contexts/flightContext";
import { useContext } from "react";

export default function FlightSummary() {
  const { flight } = useContext(FlightContext);

  return (
    <View>
      <Wrapper>
        <Row>
          <Column>
            <Code>{flight.code}</Code>
          </Column>
          <Column>
            <Date>{flight.date}</Date>
          </Column>
        </Row>
        <Row>
          <Column>
            <Time>{flight.departureTime}</Time>
            <Location>{flight.from}</Location>
          </Column>
          <AirplaneFlight />
          <Column>
            <Time textAlign="right">{flight.arrivalTime}</Time>
            <Location right>{flight.to}</Location>
          </Column>
        </Row>
        <Row>
          <Column>
            <PriceText>Total</PriceText>
          </Column>
          <Column>
            <Price>{flight.price}</Price>
          </Column>
        </Row>
      </Wrapper>
    </View>
  );
}

const View = styled.View`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 225px;
  width: 100%;
`;

const Wrapper = styled.View`
  flex: 1;
  border-radius: 0px 0px 16px 16px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  box-shadow: 0px 5px 10px rgba(89, 27, 27, 0.05);
  padding: 16px 16px 0px 16px;
`;

const Code = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.textColor};
`;

const Date = styled.Text`
  font-family: Inter_500Medium;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
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

const Time = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 24px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const Location = styled.Text`
  font-family: Inter_500Medium;
  line-height: 12px;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.textColor};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const PriceText = styled.Text`
  font-family: Inter_400Regular;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.textColor};
`;

const Price = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 22px;
  line-height: 27px;
  text-align: right;
  color: ${(props) => props.theme.textColorSecondary};
`;
