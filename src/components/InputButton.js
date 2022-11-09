import styled from "styled-components/native";

export default function InputButton(props) {
  const { label, value, image, onPress, style, disabled } = props;

  return (
    <View onPress={onPress} style={style} disabled={disabled}>
      <Label disabled={disabled}>{label}</Label>
      <InputArea>
        {image}
        <Input disabled={disabled} numberOfLines={1} image={image}>
          {value ? value : `${label} Date`}
        </Input>
      </InputArea>
    </View>
  );
}

const View = styled.TouchableOpacity`
  flex: 1.5;
  align-items: flex-start;
  margin-top: 15px;
`;

const Label = styled.Text`
  z-index: 1;
  display: flex;
  height: 24px;
  flex-grow: 0;
  margin: -15px 10px;
  background-color: ${(props) => props.theme.backgroundColorSecondary};
  padding-left: 5px;
  padding-right: 5px;
  font-family: Inter_400Regular;
  color: ${(props) =>
    props.disabled ? props.theme.disabled : props.theme.labelColorSecondary};
`;

const InputArea = styled.View`
  z-index: 0;
  width: 100%;
  flex-grow: 0;
  flex-direction: row;
  border-radius: 8px;
  padding: 15px 15px;
  border: 1px solid ${(props) => props.theme.buttonBorder};
`;

const Input = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
  flex-grow: 0;
  font-family: Inter_600SemiBold;
  width: 100%;
  color: ${(props) =>
    props.disabled ? props.theme.disabled : props.theme.labelColorSecondary};
  ${(props) => props.image && "margin-left: 12px"};
`;
