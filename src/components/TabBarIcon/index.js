import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import THEME from "../../constants/theme";

function TabBarIcon({ focused, name }) {
  return (
    <MaterialIcons
      name={name}
      size={24}
      color={focused ? THEME.buttonColor : THEME.tabBarColor}
    />
  );
}

export default TabBarIcon;
