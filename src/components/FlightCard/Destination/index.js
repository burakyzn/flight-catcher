import AirplaneFlight from "svg/AirplaneFlight";
import { Container, Wrapper, Time, Location } from "./styled";

export default function Destination({ departureTime, from, arrivalTime, to }) {
  return (
    <Container>
      <Wrapper>
        <Time>{departureTime}</Time>
        <Location>{from}</Location>
      </Wrapper>
      <AirplaneFlight />
      <Wrapper>
        <Time textAlign="right">{arrivalTime}</Time>
        <Location>{to}</Location>
      </Wrapper>
    </Container>
  );
}
