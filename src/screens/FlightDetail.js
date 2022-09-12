import styled from 'styled-components/native';
import Button from '../components/Button';
import FlightDetailCard from '../components/flightDetail/FlightDetailCard';
import { useRoute } from '@react-navigation/native';

export default function FlightDetail() {
  const route = useRoute();

  const {
    from,
    to,
    fromAirport,
    toAirport,
    departureTime,
    arrivalTime,
    flightTime,
    date,
    price
  } = route.params;

  return (
    <View>
      <Card>
        <FlightDetailCard
          from={from} 
          to={to} 
          fromAirport={fromAirport}
          toAirport={toAirport}
          departureTime={departureTime} 
          arrivalTime={arrivalTime} 
          date={date}
          flightTime={flightTime}
          price={price}
        />
      </Card>
      <Row>
        <Column>
          <Button 
            text="Cancel"
            backgroundColor="#FFFFFF"
            color="#EC441E"
          />
        </Column>
        <Column>
          <Button text="Confirm"/>
        </Column>
      </Row>
    </View>
  )
}

const View = styled.View`
  flex: 1;
  background-color: #F9FBFA;
  align-items : center;
  justify-content: center;
  width: 100%;
`;

const Card = styled.View`
  width: 100%;
`;

const Row = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 0px 16px;
`;

const Column = styled.View`
  height: 80px;
  width: 49%;
`;
