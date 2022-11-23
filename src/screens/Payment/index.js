import FullScreenView from "components/FullScreenView";
import CreditCardEntry from "./CreditCardEntry";
import FlightCard from "components/FlightCard";
import { FlightContext } from "contexts/flightContext";
import { useContext } from "react";

export default function Payment() {
  const { flight } = useContext(FlightContext);

  return (
    <FullScreenView>
      <FlightCard height="225px">
        <FlightCard.Code code={flight.code} time={flight.date} />
        <FlightCard.Destination
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          from={flight.from}
          to={flight.to}
        />
        <FlightCard.Price text="Total" value={flight.price} />
      </FlightCard>
      <CreditCardEntry />
    </FullScreenView>
  );
}
