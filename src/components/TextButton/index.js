import { TouchableOpacity } from "react-native";
import { StyledText } from "./styled";

export default function TextButton(props) {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <StyledText>{text}</StyledText>
    </TouchableOpacity>
  );
}
