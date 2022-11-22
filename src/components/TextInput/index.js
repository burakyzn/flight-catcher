import { useImperativeHandle, forwardRef } from "react";
import { Container, Label, StyledTextInput } from "./styled";

function TextInput(props, ref) {
  const { value, label, validation, ...rest } = props;

  useImperativeHandle(ref, () => ({
    isEmpty: () => value.trim(),
    validate: () => validation(),
  }));

  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextInput value={value} {...rest} />
    </Container>
  );
}

export default forwardRef(TextInput);
