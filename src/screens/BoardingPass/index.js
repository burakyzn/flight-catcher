import Barcode from "svg/Barcode";
import TextButton from "components/TextButton";
import FlightCard from "components/FlightCard";
import bookings from "mocks/bookings";
import { useContext, useEffect } from "react";
import { FlightContext } from "contexts/flightContext";
import { SCREEN } from "constants/screen";
import { useNavigation } from "@react-navigation/native";
import { SeatContext } from "contexts/seatContext";
import { CustomFullScreenView, Row, ButtonArea } from "./styled";
import { PrimaryButton } from "components/Button";

export default function BoardingPass() {
  const { flight } = useContext(FlightContext);
  const { seat } = useContext(SeatContext);
  const navigation = useNavigation();

  useEffect(() => {
    bookings.push({
      id: bookings.length + 1,
      code: flight.code,
      from: flight.from,
      to: flight.to,
      fromAirport: flight.fromAirport,
      toAirport: flight.toAirport,
      departureTime: flight.departureTime,
      arrivalTime: flight.arrivalTime,
      date: flight.date,
      cabinClass: flight.cabinClass,
      flightTime: flight.flightTime,
      gate: flight.gate,
      seat: seat,
    });
  }, []);

  return (
    <CustomFullScreenView>
      <FlightCard height="450px">
        <FlightCard.Destination
          departureTime={flight.departureTime}
          arrivalTime={flight.arrivalTime}
          from={flight.from}
          to={flight.to}
        />
        <FlightCard.Airport from={flight.fromAirport} to={flight.toAirport} />
        <FlightCard.Summary
          code={flight.code}
          gate={flight.gate}
          seat={flight.seat}
          cabinClass={flight.cabinClass}
        />
        <FlightCard.Date date={flight.date} time={flight.flightTime} />
        <Row center>
          <Barcode />
        </Row>
      </FlightCard>
      <ButtonArea>
        <PrimaryButton text="Download" />
        <TextButton
          text="Book another flight"
          onPress={() => navigation.navigate(SCREEN.home)}
        />
      </ButtonArea>
    </CustomFullScreenView>
  );
}
