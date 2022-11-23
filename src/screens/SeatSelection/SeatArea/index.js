import seats from "mocks/seats";
import { PrimaryButton } from "components/Button";
import Seat from "../Seat";
import THEME, { SEAT_COLOR } from "constants/theme";
import { SCREEN } from "constants/screen";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AlertContext } from "contexts/alertContext";
import { SeatContext } from "contexts/seatContext";
import { Container, Row, Side, Column } from "./styled";

export default function SeatArea() {
  const [selected, setSelected] = useState(null);
  const { setAlert } = useContext(AlertContext);
  const { setSeat } = useContext(SeatContext);
  const navigation = useNavigation();

  const handleSelectSeat = (reserved, seatNo) => {
    if (reserved) return;
    setSelected(seatNo);
  };

  const handleConfirm = () => {
    if (!selected) {
      setAlert("info", "Information", "You must choose a seat.");
      return;
    }

    setSeat(selected);
    navigation.navigate(SCREEN.payment);
  };

  const handleSeatColor = (selected, extraLegroom) => {
    if (selected || extraLegroom) return THEME.buttonColor;
    return THEME.labelColor;
  };

  const handleSeatBackgroundColor = (selected, reserved, extraLegroom) => {
    if (reserved) return SEAT_COLOR.reserved;
    else if (selected) return SEAT_COLOR.selected;
    else if (extraLegroom) return SEAT_COLOR.extraLegroom;
    return SEAT_COLOR.available;
  };

  return (
    <Container>
      <Row>
        <Side>
          <Column>
            {seats.A.map((seat) => (
              <Seat
                key={seat.no}
                no={seat.no}
                color={() =>
                  handleSeatColor(selected === seat.no, seat.extraLegroom)
                }
                backgroundColor={() =>
                  handleSeatBackgroundColor(
                    selected === seat.no,
                    seat.reserved,
                    seat.extraLegroom
                  )
                }
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            ))}
          </Column>
          <Column>
            {seats.B.map((seat) => (
              <Seat
                key={seat.no}
                no={seat.no}
                color={() =>
                  handleSeatColor(selected === seat.no, seat.extraLegroom)
                }
                backgroundColor={() =>
                  handleSeatBackgroundColor(
                    selected === seat.no,
                    seat.reserved,
                    seat.extraLegroom
                  )
                }
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            ))}
          </Column>
        </Side>
        <Side>
          <Column>
            {seats.C.map((seat) => (
              <Seat
                key={seat.no}
                no={seat.no}
                color={() =>
                  handleSeatColor(selected === seat.no, seat.extraLegroom)
                }
                backgroundColor={() =>
                  handleSeatBackgroundColor(
                    selected === seat.no,
                    seat.reserved,
                    seat.extraLegroom
                  )
                }
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            ))}
          </Column>
          <Column>
            {seats.D.map((seat) => (
              <Seat
                key={seat.no}
                no={seat.no}
                color={() =>
                  handleSeatColor(selected === seat.no, seat.extraLegroom)
                }
                backgroundColor={() =>
                  handleSeatBackgroundColor(
                    selected === seat.no,
                    seat.reserved,
                    seat.extraLegroom
                  )
                }
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            ))}
          </Column>
        </Side>
      </Row>
      <PrimaryButton text="Confirm" onPress={handleConfirm} />
    </Container>
  );
}
