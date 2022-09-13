import styled from 'styled-components/native';
import Button from '../components/Button';
import seats from '../mocks/seats';
import AirplaneSeat from '../components/svg/AirplaneSeat'
import { useState } from 'react';

export default function SeatSelection() {
  const [selected, setSelected] = useState(null);

  const handleSelectSeat = (reserved, seatNo) => {
    if(reserved) return;
    setSelected(seatNo);
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
                <ClickableSeat onPress={() => handleSelectSeat(seat.reserved, seat.no)}>
                  <Seat 
                    key={seat.no} 
                    selected={selected===seat.no}
                    reserved={seat.reserved}
                    extraLegroom={seat.extraLegroom}>
                      {seat.no}
                  </Seat>
                </ClickableSeat>
              )}
            </SeatColumn>
            <SeatColumn>
              {seats.B.map(seat => 
                <ClickableSeat onPress={() => handleSelectSeat(seat.reserved, seat.no)}>
                  <Seat 
                    key={seat.no} 
                    selected={selected===seat.no}
                    reserved={seat.reserved}
                    extraLegroom={seat.extraLegroom}>
                    {seat.no}
                  </Seat>
                </ClickableSeat>
              )}
            </SeatColumn>
          </Side>
          <Side>
            <SeatColumn>
              {seats.C.map(seat => 
                <ClickableSeat onPress={() => handleSelectSeat(seat.reserved, seat.no)}>
                  <Seat 
                    key={seat.no} 
                    selected={selected===seat.no}
                    reserved={seat.reserved}
                    extraLegroom={seat.extraLegroom}>
                      {seat.no}
                  </Seat>
                </ClickableSeat>
              )}
            </SeatColumn>
            <SeatColumn>
              {seats.D.map(seat => 
                <ClickableSeat onPress={() => handleSelectSeat(seat.reserved, seat.no)}>
                  <Seat 
                    key={seat.no} 
                    selected={selected===seat.no}
                    reserved={seat.reserved}
                    extraLegroom={seat.extraLegroom}>
                      {seat.no}
                  </Seat>
                </ClickableSeat>
              )}
            </SeatColumn>
          </Side>
        </SeatRow>
        <Button 
          text="Confirm"
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

const ClickableSeat = styled.TouchableOpacity`
  width: 40px;
  margin: 10px 0 10px 0;
`;

const Seat = styled.Text`
  font-size: 16px;
  line-height: 40px;
  border-radius: 4px;
  text-align: center;
  color: ${props => {
    if(props.reserved)
      return '#555555';
    if(props.selected || props.extraLegroom)
      return '#FFFFFF';
    return '#555555';
  }};
  background-color: ${props => {
    if(props.reserved)
      return '#D9D9D9';
    else if(props.selected)
      return '#EC441E';
    else if(props.extraLegroom)
      return '#7C7270';
    return 'rgba(59, 119, 220, 0.05)';
  }};
`;