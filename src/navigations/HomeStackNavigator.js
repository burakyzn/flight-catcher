import Home from "../screens/Home";
import SearchResult from "../screens/SearchResult";
import SeatSelection from '../screens/SeatSelection';
import BackButton from "../components/navigation/BackButton"; 
import HeaderTitle from "../components/navigation/HeaderTitle";
import FlightDetail from "../screens/FlightDetail";
import supportedOS from '../contants/supportedOS';
import { SCREEN, SCREEN_TITLE } from '../contants/screen';
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={ 
      { 
        tabBarStyle: [styles.tabBarStyle],
      }
    }>
      <HomeStack.Screen
        name={SCREEN.home}
        component={Home}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.home}/>,
        })}
      />
      <HomeStack.Screen
        name={SCREEN.searchResult}
        component={SearchResult}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerBackVisible: false,
          headerLeft: () => <BackButton />,
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.searchFlight}/>,
        })}
      />
      <HomeStack.Screen
        name={SCREEN.flightDetail}
        component={FlightDetail}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerBackVisible: false,
          headerLeft: () => <BackButton />,
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.flightDetail}/>,
        })}
      />
      <HomeStack.Screen
        name={SCREEN.seatSelection}
        component={SeatSelection}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerBackVisible: false,
          headerLeft: () => <BackButton />,
          headerTitle: () => <HeaderTitle title={SCREEN_TITLE.seatSelection}/>,
        })}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#EC441E',
    elevation: 0,
    height: Platform.OS === supportedOS.android ? 65 : 80,
    borderWidth: 0,
  },
  header: {
    backgroundColor: '#F9FBFA'
  }
});