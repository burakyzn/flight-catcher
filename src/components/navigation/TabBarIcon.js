import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function TabBarIcon({ focused, name }) {
  return (
    <MaterialIcons
      name={name}
      size={24}
      color={focused ? "#FFFFFF" : "#FAD3CA"}
    />
  );
}

export default TabBarIcon;
