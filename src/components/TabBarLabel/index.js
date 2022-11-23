import { Platform } from "react-native";
import { StyledText } from "./styled";

export default function TabBarLabel({ focused, text }) {
  return (
    <StyledText focused={focused} platform={Platform.OS}>
      {text}
    </StyledText>
  );
}
