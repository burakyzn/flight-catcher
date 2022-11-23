import FlightCard from "components/FlightCard";
import FullScreenView from "components/FullScreenView";
import { SCREEN } from "constants/screen";
import { useNavigation } from "@react-navigation/native";
import { Row, Column, Wrapper } from "./styled";
import { useContext } from "react";
import { PrimaryButton, SecondaryButton } from "components/Button";
import { FlightContext } from "contexts/flightContext";

export default function FlightDetail() {
  const { flight } = useContext(FlightContext);
  const navigation = useNavigation();

  return (
    <FullScreenView>
      <FlightCard height="350px">
        <FlightCard.Destination
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          from={flight.from}
          to={flight.to}
        />
        <FlightCard.Airport from={flight.fromAirport} to={flight.toAirport} />
        <FlightCard.Date date={flight.date} time={flight.flightTime} />
        <FlightCard.Price text="Total" value={flight.price} />
      </FlightCard>
      <Row>
        <Column>
          <SecondaryButton text="Cancel" onPress={() => navigation.goBack()} />
        </Column>
        <Column>
          <PrimaryButton
            onPress={() => navigation.navigate(SCREEN.seatSelection)}
            text="Confirm"
          />
        </Column>
      </Row>
    </FullScreenView>
  );
}
