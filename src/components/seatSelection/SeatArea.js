import styled from 'styled-components/native';
import seats from '../../mocks/seats';
import Button from '../Button';
import Seat from '../seatSelection/Seat';
import { SCREEN } from '../../contants/screen';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SeatArea() {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();

  const handleSelectSeat = (reserved, seatNo) => {
    if(reserved) return;
    setSelected(seatNo);
  }

  const handleConfirm = () => {
    navigation.navigate(SCREEN.payment);
  }

  const handleSeatColor = (selected, reserved, extraLegroom) => {
    if(reserved)
      return '#555555';
    if(selected || extraLegroom)
      return '#FFFFFF';
    return '#555555';
  }

  const handleSeatBackgroundColor = (selected, reserved, extraLegroom) => {
    if(reserved)
      return '#D9D9D9';
    else if(selected)
      return '#EC441E';
    else if(extraLegroom)
      return '#7C7270';
    return 'rgba(59, 119, 220, 0.05)';
  }

  return (
    <View>
      <Row>
        <Side>
          <Column>
            {seats.A.map(seat => 
              <Seat 
                key={seat.no}
                no={seat.no}
                color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            )}
          </Column>
          <Column>
            {seats.B.map(seat => 
              <Seat 
                key={seat.no}
                no={seat.no}
                color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            )}
          </Column>
        </Side>
        <Side>
          <Column>
            {seats.C.map(seat => 
              <Seat 
                key={seat.no}
                no={seat.no}
                color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            )}
          </Column>
          <Column>
            {seats.D.map(seat => 
              <Seat 
                key={seat.no}
                no={seat.no}
                color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                onPress={() => handleSelectSeat(seat.reserved, seat.no)}
              />
            )}
          </Column>
        </Side>
      </Row>
      <Button 
        text="Confirm"
        onPress={handleConfirm}
      />
    </View>
  )
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