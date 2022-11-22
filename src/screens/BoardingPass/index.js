import Barcode from "components/svg/Barcode";
import TextButton from "components/TextButton";
import BoardingDetail from "components/boardingPass/BoardingDetail";
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
      <BoardingDetail flight={flight} seat={seat} />
      <Row center>
        <Barcode />
      </Row>
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
