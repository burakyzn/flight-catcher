import Clock from "svg/Clock";
import Calendar from "svg/Calendar";
import AirplaneFlight from "svg/AirplaneFlight";
import InputButton from "components//InputButton";
import { FlightContext } from "contexts/flightContext";
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
            icon={<Calendar />}
            disabled
          />
          <InputButton
            label="Time"
            value={flight.flightTime}
            icon={<Clock />}
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
