import styled from 'styled-components/native';

export default function Button(props) {
  const { text, onPress } = props;

  return (
    <ClickableView onPress={onPress}>
      <Wrapper>
        <Text>{text}</Text>
      </Wrapper>
    </ClickableView> 
  )
}

const ClickableView = styled.TouchableOpacity`
  flex: 1;
  padding-bottom: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  background: #EC441E;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-family: Inter_500Medium;
`;