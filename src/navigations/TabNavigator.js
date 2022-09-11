import Booking from '../screens/Booking';
import Offer from '../screens/Offer';
import Profile from '../screens/Profile';
import TabBarLabel from "../components/navigation/TabBarLabel";
import TabBarIcon from "../components/navigation/TabBarIcon";
import HeaderTitle from "../components/navigation/HeaderTitle";
import BackButton from "../components/navigation/BackButton"; 
import supportedOS from '../contants/supportedOS';
import HomeStackNavigator from './HomeStackNavigator';
import { PAGES, PAGES_TITLE, PAGES_ICON, STACKS } from '../contants/pages';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={ 
      { 
        tabBarStyle: [styles.tabBarStyle],
      }
    }>
      <Tab.Screen 
        name={STACKS.home}
        component={HomeStackNavigator} 
        options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={PAGES_ICON.home} />,
          tabBarLabel: ({focused}) => <TabBarLabel focused={focused} text={PAGES.home} />
        })}/>
      <Tab.Screen 
        name={PAGES.booking}
        component={Booking} 
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerTitle: () => <HeaderTitle title={PAGES_TITLE.booking}/>,
          headerLeft: () => <BackButton />,
          tabBarIcon:  ({focused}) => <TabBarIcon focused={focused} name={PAGES_ICON.booking} />,
          tabBarLabel: ({focused}) => <TabBarLabel focused={focused} text={PAGES.booking}  />
        })}/>
      <Tab.Screen 
        name={PAGES.offer}
        component={Offer} 
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerTitle: () => <HeaderTitle title={PAGES_TITLE.offer}/>,
          headerLeft: () => <BackButton />,
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name={PAGES_ICON.offer} />,
          tabBarLabel: ({focused}) => <TabBarLabel focused={focused} text={PAGES.offer}  />
        })}/>
      <Tab.Screen 
        name={PAGES.profile}
        component={Profile} 
        options={() => ({
          headerShadowVisible: false,
          headerStyle: styles.header,
          headerTitleAlign : 'center',
          headerTitle: () => <HeaderTitle title={PAGES_TITLE.profile}/>,
          headerLeft: () => <BackButton />,
          tabBarIcon : ({focused}) => <TabBarIcon focused={focused} name={PAGES_ICON.profile} />,
          tabBarLabel: ({focused}) => <TabBarLabel focused={focused} text={PAGES.profile}  />
        })}/>
    </Tab.Navigator>
  );
};

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