import styled from 'styled-components/native';
import searchResult from '../mocks/searchResult';
import FlightCard from '../components/searchResult/FlightCard';
import { FlatList } from 'react-native';

export default function SearchResult() {
  const renderItem = ({ item }) => (
    <FlightCard 
      code={item.code}
      from={item.from} 
      to={item.to} 
      fromAirport={item.fromAirport}
      toAirport={item.toAirport}
      departureTime={item.departureTime} 
      arrivalTime={item.arrivalTime} 
      date={item.date}
      cabinClass={item.cabinClass} 
      flightTime={item.flightTime} 
      price={item.price}
    />
  );

  return (
    <View>
      <FlatList
        style={{width: "100%"}}
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const View = styled.View`
  flex: 1;
  background-color: #F9FBFA;
  align-items : center;
  justify-content: center;
`;