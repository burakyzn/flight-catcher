import styled from "styled-components/native";
import Button from "../components/Button";
import Barcode from "../components/svg/Barcode";
import TextButton from "../components/TextButton";
import BoardingDetail from "../components/boardingPass/BoardingDetail";
import bookings from "../mocks/bookings";
import THEME from "../constants/theme";
import { useContext, useEffect } from "react";
import { FlightContext } from "../contexts/flightContext";
import { SCREEN } from "../constants/screen";
import { useNavigation } from "@react-navigation/native";
import { SeatContext } from "../contexts/seatContext";

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
    <View>
      <BoardingDetail flight={flight} seat={seat} />
      <Row center>
        <Barcode />
      </Row>
      <ButtonArea>
        <Button text="Download" />
        <TextButton
          text="Book another flight"
          onPress={() => navigation.navigate(SCREEN.home)}
          textStyle={{
            color: THEME.textColorSecondary,
            fontFamily: "Inter_400Regular",
            fontSize: 16,
            textAlign: "center",
          }}
        />
      </ButtonArea>
    </View>
  );
}

const View = styled.View`
  flex: 1;
  padding: 32px;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  padding: 16px 0 16px 0;
`;

const ButtonArea = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 20px;
`;
