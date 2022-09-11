import Home from "../screens/Home";
import SearchResult from "../screens/SearchResult";
import BackButton from "../components/navigation/BackButton"; 
import HeaderTitle from "../components/navigation/HeaderTitle";
import supportedOS from '../contants/supportedOS';
import { PAGES, PAGES_TITLE } from '../contants/pages';
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
        name={PAGES.home}
        component={Home}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerTitle: () => <HeaderTitle title={PAGES_TITLE.home}/>,
        })}
      />
      <HomeStack.Screen
        name={PAGES.searchResult}
        component={SearchResult}
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerBackVisible: false,
          headerLeft: () => <BackButton />,
          headerTitle: () => <HeaderTitle title={PAGES_TITLE.searchFlight}/>,
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