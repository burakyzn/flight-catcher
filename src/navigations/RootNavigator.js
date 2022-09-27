import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import AlertProvider from "../contexts/alertContext";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AlertProvider>
        <TabNavigator />
      </AlertProvider>
    </NavigationContainer>
  );
};