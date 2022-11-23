import { Container, Wrapper, StyledText, Value } from "./styled";

export default function Summary({ code, gate, seat, cabinClass }) {
  return (
    <Container>
      <Wrapper>
        <StyledText>Flight</StyledText>
        <Value>{code}</Value>
      </Wrapper>
      <Wrapper>
        <StyledText>Gate</StyledText>
        <Value>{gate}</Value>
      </Wrapper>
      <Wrapper>
        <StyledText>Seat</StyledText>
        <Value>{seat}</Value>
      </Wrapper>
      <Wrapper>
        <StyledText>Class</StyledText>
        <Value>{cabinClass}</Value>
      </Wrapper>
    </Container>
  );
}
