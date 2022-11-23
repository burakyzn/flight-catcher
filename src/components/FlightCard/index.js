import Destination from "./Destination";
import FlightCode from "./FlightCode";
import Price from "./Price";
import Summary from "./Summary";
import Airport from "./Airport";
import FlightDate from "./FlightDate";
import { Container, Wrapper } from "./styled";

export default function FlightCard({ height, children }) {
  return (
    <Container height={height}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

FlightCard.Code = FlightCode;
FlightCard.Destination = Destination;
FlightCard.Price = Price;
FlightCard.Airport = Airport;
FlightCard.Summary = Summary;
FlightCard.Date = FlightDate;
