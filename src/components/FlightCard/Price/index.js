import { Container, Wrapper, StyledText, Value } from "./styled";

export default function Price({ text, value }) {
  return (
    <Container>
      <Wrapper>
        <StyledText>{text}</StyledText>
      </Wrapper>
      <Wrapper>
        <Value>{value}</Value>
      </Wrapper>
    </Container>
  );
}
