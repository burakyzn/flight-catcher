import { Container, Wrapper, StyledText } from "./styled";

export default function Airport({ from, to }) {
  return (
    <Container>
      <Wrapper>
        <StyledText>{from}</StyledText>
      </Wrapper>
      <Wrapper>
        <StyledText textAlign="right">{to}</StyledText>
      </Wrapper>
    </Container>
  );
}
