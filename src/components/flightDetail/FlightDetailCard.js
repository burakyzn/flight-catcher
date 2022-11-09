import Clock from "../svg/Clock";
import Calendar from "../svg/Calendar";
import styled from "styled-components/native";
import AirplaneFlight from "../svg/AirplaneFlight";
import InputButton from "../InputButton";
import { FlightContext } from "../../contexts/flightContext";
import { useContext } from "react";

export default function FlightDetailCard() {
  const { flight } = useContext(FlightContext);

  return (
    <View>
      <Wrapper>
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
          <Column width="50%">
            <Airport>{flight.fromAirport}</Airport>
          </Column>
          <Column width="50%">
            <Airport textAlign="right">{flight.toAirport}</Airport>
          </Column>
        </Row>
        <Row>
          <InputButton
            label="Date"
            value={flight.date}
            image={<Calendar />}
            style={{ marginRight: 10 }}
            disabled
          />
          <InputButton
            label="Time"
            value={flight.flightTime}
            image={<Clock />}
            disabled
          />
        </Row>
        <Row>
          <Price>{flight.price}</Price>
        </Row>
      </Wrapper>
    </View>
  );
}

const View = styled.View`
  height: 350px;
  padding: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  border-radius: 16px;
  background-color: #ffffff;
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
  ${(props) => props.width && `width: ${props.width}`};
`;

const Time = styled.Text`
  font-family: Inter_600SemiBold;
  font-size: 24px;
  line-height: 24px;
  color: #191919;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const Location = styled.Text`
  font-family: Inter_500Medium;
  line-height: 12px;
  font-size: 16px;
  line-height: 19px;
  color: #191919;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const Airport = styled.Text`
  font-family: Inter_300Light;
  font-size: 12px;
  line-height: 15px;
  color: #666666;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const Price = styled.Text`
  flex: 1;
  font-family: Inter_600SemiBold;
  font-size: 32px;
  line-height: 32px;
  color: #191919;
  text-align: center;
`;
