import styled from 'styled-components/native';
import Button from '../components/Button';
import Barcode from '../components/svg/Barcode';
import TextButton from '../components/TextButton';
import BoardingDetail from '../components/boardingPass/BoardingDetail';
import { useContext } from 'react';
import { FlightContext } from '../contexts/flightContext';
import { SCREEN } from '../contants/screen';
import { useNavigation } from '@react-navigation/native';
import { SeatContext } from '../contexts/seatContext';

export default function BoardingPass() {
  const { flight } = useContext(FlightContext);
  const { seat } = useContext(SeatContext);
  const navigation = useNavigation();

  return (
    <View>
      <BoardingDetail flight={flight} seat={seat}/>
      <Row center>
        <Barcode />
      </Row>
      <ButtonArea>
        <Button 
          text="Download"
        />
        <TextButton 
          text="Book another flight"
          onPress={() => navigation.navigate(SCREEN.home)}
          textStyle={{
            color: "#EC441E",
            fontFamily: "Inter_400Regular",
            fontSize: 16,
            textAlign: "center"
          }}
        />
      </ButtonArea>
    </View>
  )
}

const View = styled.View`
  flex: 1;
  padding: 32px;
  background-color: #F9FBFA;
  justify-content: center;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.center ? 'center' : "space-between"};;
  padding: 16px 0 16px 0;
`;

const ButtonArea = styled.View`
  height: 100px;
  width: 100%;
  margin-top: 20px;
`;
