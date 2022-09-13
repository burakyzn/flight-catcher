import styled from 'styled-components/native';
import Button from '../components/Button';
import seats from '../mocks/seats';
import AirplaneSeat from '../components/svg/AirplaneSeat';
import Seat from '../components/seatSelection/Seat';
import { useState } from 'react';
import { SCREEN } from '../contants/screen';
import { useNavigation } from '@react-navigation/native';

export default function SeatSelection() {
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
      <Information>
        <Wrapper>
          <Circle color="#EC441E"/>
          <Text>Selected</Text>
        </Wrapper>
        <Wrapper>
          <Circle color="#7C7270"/>
          <Text>Extra Legroom</Text>
        </Wrapper>
        <Wrapper>
          <Circle color="#D9D9D9"/>
          <Text>Reserved</Text>
        </Wrapper>
      </Information>
      <SeatArea>
        <SeatRow>
          <Side>
            <SeatColumn>
              {seats.A.map(seat => 
                <Seat 
                  no={seat.no}
                  color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  onPress={() => handleSelectSeat(seat.reserved, seat.no)}
                />
              )}
            </SeatColumn>
            <SeatColumn>
              {seats.B.map(seat => 
                <Seat 
                  no={seat.no}
                  color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  onPress={() => handleSelectSeat(seat.reserved, seat.no)}
                />
              )}
            </SeatColumn>
          </Side>
          <Side>
            <SeatColumn>
              {seats.C.map(seat => 
                <Seat 
                  no={seat.no}
                  color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  onPress={() => handleSelectSeat(seat.reserved, seat.no)}
                />
              )}
            </SeatColumn>
            <SeatColumn>
              {seats.D.map(seat => 
                <Seat 
                  no={seat.no}
                  color={() => handleSeatColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  backgroundColor={() => handleSeatBackgroundColor(selected === seat.no, seat.reserved, seat.extraLegroom)}
                  onPress={() => handleSelectSeat(seat.reserved, seat.no)}
                />
              )}
            </SeatColumn>
          </Side>
        </SeatRow>
        <Button 
          text="Confirm"
          onPress={handleConfirm}
        />
      </SeatArea>
      <AirplaneSeat />
    </View>
  )
}

const View = styled.View`
  flex: 1;
  align-items : center;
  background-color: #F9FBFA;
  justify-content: space-between;
`;

const Information = styled.View`
  flex-direction: row;
  margin: 20px 0 20px 0;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Circle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color}
`;

const Text = styled.Text`
  color: #555555;
  font-size: 14px;
  margin-left: 5px;
  line-height: 22px;
  margin-right: 10px;
  font-family: Inter_400Regular;
`;

const SeatArea = styled.View`
  width: 100%;
  height: 480px;
  padding: 0 60px 0 60px;
`;

const SeatRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Side = styled.View`
  flex-direction: row;
`;

const SeatColumn = styled.View`
  margin: 0 10px 0 10px;
`;