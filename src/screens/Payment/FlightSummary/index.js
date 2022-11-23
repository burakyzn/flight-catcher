import AirplaneFlight from "svg/AirplaneFlight";
import { FlightContext } from "contexts/flightContext";
import { useContext } from "react";
import {
  View,
  Wrapper,
  Code,
  Date,
  Row,
  Column,
  Time,
  Location,
  PriceText,
  Price,
} from "./styled";

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
