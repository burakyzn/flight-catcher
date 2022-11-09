import styled from "styled-components/native";

export default function Button(props) {
  const { text, onPress, backgroundColor, color } = props;

  return (
    <ClickableView onPress={onPress}>
      <Wrapper color={color} backgroundColor={backgroundColor}>
        <Text color={color}>{text}</Text>
      </Wrapper>
    </ClickableView>
  );
}

const ClickableView = styled.TouchableOpacity`
  flex: 1;
  padding-bottom: 16px;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.buttonBackgroundColor};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  ${(props) => props.color && `border:  1px solid ${props.color}`};
`;

const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : props.theme.buttonColor)};
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  font-family: Inter_500Medium;
`;
