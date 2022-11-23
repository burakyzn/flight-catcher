import AirplaneFlight from "svg/AirplaneFlight";
import { PrimaryButton } from "components/Button";
import { useContext } from "react";
import { FlightContext } from "contexts/flightContext";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "constants/screen";
import {
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
} from "./styled";

export default function FlightCard(params) {
  const { flight } = params;
  const navigation = useNavigation();
  const { setFlight } = useContext(FlightContext);

  const handleCheckButton = () => {
    setFlight(flight);
    navigation.navigate(SCREEN.flightDetail);
  };

  return (
    <View>
      <Wrapper>
        <Row>
          <Column>
            <Code>{flight.code}</Code>
          </Column>
          <Column>
            <FlightTime>{flight.flightTime}</FlightTime>
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
            <Location>{flight.to}</Location>
          </Column>
        </Row>
        <Row>
          <Column>
            <CabinClass>{flight.cabinClass}</CabinClass>
          </Column>
          <Column>
            <Price>From {flight.price}</Price>
          </Column>
        </Row>
        <PrimaryButton text="Check" onPress={handleCheckButton} />
      </Wrapper>
    </View>
  );
}
