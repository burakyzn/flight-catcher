import Booking from "../screens/Booking";
import Offer from "../screens/Offer";
import Profile from "../screens/Profile";
import TabBarLabel from "../components/navigation/TabBarLabel";
import TabBarIcon from "../components/navigation/TabBarIcon";
import HeaderTitle from "../components/navigation/HeaderTitle";
import BackButton from "../components/navigation/BackButton";
import supportedOS from "../contants/supportedOS";
import HomeStackNavigator from "./HomeStackNavigator";
import THEME from "../contants/theme";
import { SCREEN, SCREEN_TITLE, SCREEN_ICON, STACKS } from "../contants/screen";
import { StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [styles.tabBarStyle],
      }}
    >
      <Tab.Screen
        name={STACKS.home}
        component={HomeStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={SCREEN_ICON.home} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text={SCREEN.home} />
          ),
        })}
      />
      <Tab.Screen
        name={SCREEN.booking}
        component={Booking}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.booking} />,
          headerLeft: () => <BackButton />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={SCREEN_ICON.booking} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text={SCREEN.booking} />
          ),
        })}
      />
      <Tab.Screen
        name={SCREEN.offer}
        component={Offer}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.offer} />,
          headerLeft: () => <BackButton />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={SCREEN_ICON.offer} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text={SCREEN.offer} />
          ),
        })}
      />
      <Tab.Screen
        name={SCREEN.profile}
        component={Profile}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign: "center",
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.profile} />,
          headerLeft: () => <BackButton />,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name={SCREEN_ICON.profile} />
          ),
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text={SCREEN.profile} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: THEME.buttonBackgroundColor,
    elevation: 0,
    height: Platform.OS === supportedOS.android ? 65 : 80,
    borderWidth: 0,
  },
  header: {
    backgroundColor: THEME.backgroundColor,
  },
});
