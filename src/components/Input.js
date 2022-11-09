import styled from "styled-components/native";
import { useImperativeHandle, forwardRef } from "react";

function Input(props, ref) {
  const { type, value, label, onChange, placeholder, maxLength, validation } =
    props;

  useImperativeHandle(ref, () => ({
    isEmpty: () => value.trim(),
    validate: () => validation(),
  }));

  return (
    <View>
      <Label>{label}</Label>
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
        maxLength={maxLength}
      />
    </View>
  );
}

export default forwardRef(Input);

const View = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.textColor};
  font-family: Inter_500Medium;
`;

const TextInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-bottom-width: 0.75px;
  border-bottom-color: ${(props) => props.theme.buttonBorder};
  font-family: Inter_300Light;
`;
