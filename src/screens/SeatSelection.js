import styled from 'styled-components/native';
import AirplaneSeat from '../components/svg/AirplaneSeat';
import Information from '../components/seatSelection/Information';
import SeatArea from '../components/seatSelection/SeatArea';

export default function SeatSelection() {
  return (
    <View>
      <Information />
      <SeatArea />
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