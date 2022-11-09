import styled from "styled-components/native";

export default function Seat(props) {
  const { no, color, backgroundColor, onPress } = props;

  return (
    <View onPress={onPress}>
      <Text color={color} backgroundColor={backgroundColor}>
        {no}
      </Text>
    </View>
  );
}

const View = styled.TouchableOpacity`
  width: 40px;
  margin: 10px 0 10px 0;
`;

const Text = styled.Text`
  font-size: 16px;
  line-height: 40px;
  border-radius: 4px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.theme.labelColor)};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(59, 119, 220, 0.05)"};
`;
