import styled from "styled-components/native";
import seats from "../../mocks/seats";
import Button from "../Button";
import Seat from "../seatSelection/Seat";
import THEME, { SEAT_COLOR } from "../../contants/theme";
import { SCREEN } from "../../contants/screen";
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AlertContext } from "../../contexts/alertContext";
import { SeatContext } from "../../contexts/seatContext";

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
    <View>
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
      <Button text="Confirm" onPress={handleConfirm} />
    </View>
  );
}

const View = styled.View`
  width: 100%;
  height: 480px;
  padding: 0 60px 0 60px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Side = styled.View`
  flex-direction: row;
`;

const Column = styled.View`
  margin: 0 10px 0 10px;
`;
