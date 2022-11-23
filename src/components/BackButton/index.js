import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyledIcon } from "./styled";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <StyledIcon name="arrow-back-ios" size={24} color="black" />
    </TouchableOpacity>
  );
}
