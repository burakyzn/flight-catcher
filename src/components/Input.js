import styled from 'styled-components/native';

export default function Input(props){
  const {
    type,
    value,
    label,
    onChange,
    placeholder,
  } = props;

  return (
    <View>
      <Label>{label}</Label>
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={type}
      />
    </View> 
  )
}

const View = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  color: #191919;
  font-family: Inter_500Medium;
`;

const TextInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-bottom-width: 0.75px;
  border-bottom-color: #E6E8E7;
  font-family: Inter_300Light;
`;

