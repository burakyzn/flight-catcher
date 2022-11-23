import TabNavigator from "./TabNavigator";
import AlertProvider from "../contexts/alertContext";
import { NavigationContainer } from "@react-navigation/native";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AlertProvider>
        <TabNavigator />
      </AlertProvider>
    </NavigationContainer>
  );
}
