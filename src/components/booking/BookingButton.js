import styled from 'styled-components/native';

export default function BookingButton(props) {
  const {label, value, image, onPress} = props;

  return (
    <Container onPress={onPress}>
      <Label>{label}</Label>
      <InputArea>
        {image}
        <Input numberOfLines={1} image={image}>{value ? value : `${label} Date`}</Input>
      </InputArea>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
  margin-top: 15px;
`;

const Label = styled.Text`
  z-index: 1;
  display: flex;
  height: 24px;
  flex-grow: 0;
  margin: -15px 10px;
  background-color: #FFF;
  padding-left: 5px;
  padding-right: 5px;
  font-family: Inter_400Regular;
`;

const InputArea = styled.View`
  z-index: 0;
  width: 100%;
  flex-grow: 0;
  flex-direction: row;
  border-radius: 8px;
  padding: 15px 15px;
  border: 1px solid #E6E8E7;
`;

const Input = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #191919;
  flex-grow: 0;
  margin-left: ${props => props.image ? '12px' : '0'};
  font-family: Inter_600SemiBold;
  width: 100%;
`;