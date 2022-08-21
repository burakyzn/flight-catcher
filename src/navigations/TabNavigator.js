import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'; 
import {StyleSheet, Text, Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: [styles.tabBarStyle]
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="home" size={24} color="white" />,
          tabBarLabel: () => <Text style={{fontSize: 10, color: '#FFF', bottom: Platform.OS === 'android' ? 10 : 0}}>Home</Text>
        })}/>
      <Tab.Screen 
        name="Booking" 
        component={Home} 
        options={() => ({
          headerShown: false,
          tabBarIcon:  () => <MaterialIcons name="list-alt" size={24} color="white" />,
          tabBarLabel: () => <Text style={{fontSize: 10, color: '#FAD3CA', bottom: Platform.OS === 'android' ? 10 : 0}}>Booking</Text>
        })}/>
              <Tab.Screen 
        name="Offer" 
        component={Home} 
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="campaign" size={24} color="white" />,
          tabBarLabel: () => <Text style={{fontSize: 10, color: '#FAD3CA', bottom: Platform.OS === 'android' ? 10 : 0}}>Offer</Text>
        })}/>
              <Tab.Screen 
        name="Profile" 
        component={Home} 
        options={() => ({
          headerShown: false,
          tabBarIcon : () => <MaterialIcons name="person-outline" size={24} color="white" />,
          tabBarLabel: () => <Text style={{fontSize: 10, color: '#FAD3CA', bottom: Platform.OS === 'android' ? 10 : 0}}>Profile</Text>
        })}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#EC441E',
    elevation: 0,
    height: 70,
    borderWidth: 0,
  },
});

export default TabNavigator;