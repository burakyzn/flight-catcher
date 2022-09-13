import styled from 'styled-components/native';

export default function Information() {
  return (
    <View>
      <Wrapper>
        <Circle color="#EC441E"/>
        <Text>Selected</Text>
      </Wrapper>
      <Wrapper>
        <Circle color="#7C7270"/>
        <Text>Extra Legroom</Text>
      </Wrapper>
      <Wrapper>
        <Circle color="#D9D9D9"/>
        <Text>Reserved</Text>
      </Wrapper>
    </View>
  )
}

const View = styled.View`
  flex-direction: row;
  margin: 20px 0 20px 0;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Circle = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => props.color}
`;

const Text = styled.Text`
  color: #555555;
  font-size: 14px;
  margin-left: 5px;
  line-height: 22px;
  margin-right: 10px;
  font-family: Inter_400Regular;
`;