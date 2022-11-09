import Clock from "../svg/Clock";
import Calendar from "../svg/Calendar";
import styled from "styled-components/native";
import AirplaneFlight from "../svg/AirplaneFlight";
import InputButton from "../InputButton";

export default function BoardingDetail(props) {
  const { flight, seat } = props;

  return (
    <View>
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
        <Column>
          <DetailText>Flight</DetailText>
          <Detail>{flight.code}</Detail>
        </Column>
        <Column>
          <DetailText>Gate</DetailText>
          <Detail>{flight.gate}</Detail>
        </Column>
        <Column>
          <DetailText>Seat</DetailText>
          <Detail>{seat}</Detail>
        </Column>
        <Column>
          <DetailText>Class</DetailText>
          <Detail>{flight.cabinClass}</Detail>
        </Column>
      </Row>
    </View>
  );
}

const View = styled.View`
  justify-content: center;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
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

const Airport = styled.Text`
  font-family: Inter_300Light;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.labelColor};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`;

const ButtonArea = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 20px;
`;

const DetailText = styled.Text`
  font-family: Inter_400Regular;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => props.theme.labelColor};
`;

const Detail = styled.Text`
  font-family: Inter_500Medium;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
`;
