import Home from "../screens/Home";
import SearchResult from "../screens/SearchResult";
import SeatSelection from "../screens/SeatSelection";
import BackButton from "../components/BackButton";
import HeaderTitle from "../components/HeaderTitle";
import FlightDetail from "../screens/FlightDetail";
import Payment from "../screens/Payment";
import BoardingPass from "../screens/BoardingPass";
import FlightProvider from "../contexts/flightContext";
import SeatProvider from "../contexts/seatContext";
import THEME from "../constants/theme";
import { SCREEN, SCREEN_TITLE } from "../constants/screen";
import { StyleSheet, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <FlightProvider>
      <SeatProvider>
        <HomeStack.Navigator
          screenOptions={{
            tabBarStyle: [styles.tabBarStyle],
          }}
        >
          <HomeStack.Screen
            name={SCREEN.home}
            component={Home}
            options={() => ({
              headerShadowVisible: false,
              headerStyle: styles.header,
              headerTitleAlign: "center",
              headerTitle: () => <HeaderTitle title={SCREEN_TITLE.home} />,
            })}
          />
          <HomeStack.Screen
            name={SCREEN.searchResult}
            component={SearchResult}
            options={() => ({
              headerShadowVisible: false,
              headerStyle: styles.header,
              headerTitleAlign: "center",
              headerBackVisible: false,
              headerLeft: () => <BackButton />,
              headerTitle: () => (
                <HeaderTitle title={SCREEN_TITLE.searchFlight} />
              ),
            })}
          />
          <HomeStack.Screen
            name={SCREEN.flightDetail}
            component={FlightDetail}
            options={() => ({
              headerShadowVisible: false,
              headerStyle: styles.header,
              headerTitleAlign: "center",
              headerBackVisible: false,
              headerLeft: () => <BackButton />,
              headerTitle: () => (
                <HeaderTitle title={SCREEN_TITLE.flightDetail} />
              ),
            })}
          />
          <HomeStack.Screen
            name={SCREEN.seatSelection}
            component={SeatSelection}
            options={() => ({
              headerShadowVisible: false,
              headerStyle: styles.header,
              headerTitleAlign: "center",
              headerBackVisible: false,
              headerLeft: () => <BackButton />,
              headerTitle: () => (
                <HeaderTitle title={SCREEN_TITLE.seatSelection} />
              ),
            })}
          />
          <HomeStack.Screen
            name={SCREEN.payment}
            component={Payment}
            options={() => ({
              headerShadowVisible: false,
              headerStyle: styles.header,
              headerTitleAlign: "center",
              headerBackVisible: false,
              headerLeft: () => <BackButton />,
              headerTitle: () => <HeaderTitle title={SCREEN_TITLE.payment} />,
            })}
          />
          <HomeStack.Screen
            name={SCREEN.boardingPass}
            component={BoardingPass}
            options={() => ({
              headerShadowVisible: false,
              headerStyle: styles.header,
              headerTitleAlign: "center",
              headerBackVisible: false,
              headerTitle: () => (
                <HeaderTitle title={SCREEN_TITLE.boardingPass} />
              ),
            })}
          />
        </HomeStack.Navigator>
      </SeatProvider>
    </FlightProvider>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: THEME.buttonBackgroundColor,
    elevation: 0,
    height: 80,
    borderWidth: 0,
  },
  header: {
    backgroundColor: THEME.backgroundColor,
  },
});
