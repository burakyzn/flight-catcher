import { Container, StyledText } from "./styled";

export default function Seat(props) {
  const { no, color, backgroundColor, onPress } = props;

  return (
    <Container onPress={onPress}>
      <StyledText color={color} backgroundColor={backgroundColor}>
        {no}
      </StyledText>
    </Container>
  );
}
