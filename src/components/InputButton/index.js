import { Container, Label, Wrapper, StyledInput, Icon } from "./styled";

export default function InputButton(props) {
  const { label, value, icon, onPress, disabled } = props;

  return (
    <Container onPress={onPress} disabled={disabled}>
      <Label disabled={disabled}>{label}</Label>
      <Wrapper>
        {icon && <Icon>{icon}</Icon>}
        <StyledInput disabled={disabled} numberOfLines={1}>
          {value}
        </StyledInput>
      </Wrapper>
    </Container>
  );
}
