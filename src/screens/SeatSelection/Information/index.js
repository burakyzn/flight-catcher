import { SEAT_COLOR } from "constants/theme";
import { Container, Wrapper, Circle, StyledText } from "./styled";

export default function Information() {
  return (
    <Container>
      <Wrapper>
        <Circle color={SEAT_COLOR.selected} />
        <StyledText>Selected</StyledText>
      </Wrapper>
      <Wrapper>
        <Circle color={SEAT_COLOR.extraLegroom} />
        <StyledText>Extra Legroom</StyledText>
      </Wrapper>
      <Wrapper>
        <Circle color={SEAT_COLOR.reserved} />
        <StyledText>Reserved</StyledText>
      </Wrapper>
    </Container>
  );
}
