import FlightCard from "components/FlightCard";
import bookings from "mocks/bookings";
import { PrimaryButton } from "components/Button";
import { FlatList } from "react-native";
import { Container } from "./styled";

export default function Booking() {
  const renderItem = ({ item }) => (
    <FlightCard height="420px">
      <FlightCard.Destination
        departureTime={item.departureTime}
        arrivalTime={item.arrivalTime}
        from={item.from}
        to={item.to}
      />
      <FlightCard.Airport from={item.fromAirport} to={item.toAirport} />
      <FlightCard.Summary
        code={item.code}
        gate={item.gate}
        seat={item.seat}
        cabinClass={item.cabinClass}
      />
      <FlightCard.Date date={item.date} time={item.flightTime} />
      <PrimaryButton text="Modify" />
    </FlightCard>
  );

  return (
    <Container>
      <FlatList
        style={{ width: "100%" }}
        data={bookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
