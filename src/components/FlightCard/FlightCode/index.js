import { Container, Wrapper, Code, Time } from "./styled";

export default function FlightCode({ code, time }) {
  return (
    <Container>
      <Wrapper>
        <Code>{code}</Code>
      </Wrapper>
      <Wrapper>
        <Time>{time}</Time>
      </Wrapper>
    </Container>
  );
}
