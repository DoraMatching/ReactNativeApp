import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginForm, { LoginContainer } from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

import Home from "../screens/Home";
import  HomeContainer  from "../containers/HomeContainer";
import BlogSearch from '../screens/BlogScreen/BlogSearch';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabRouters = () => (
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused
                ? 'ios-home'
                : 'ios-home';
      } else if (route.name === 'Blogs') {
        iconName = focused ? 'ios-book' : 'ios-book';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'blueviolet',
    inactiveTintColor: 'gray',
  }}
 >
    <Tab.Screen name="Home" component={HomeContainer} />
    <Tab.Screen name="Blogs" component={BlogSearch} />
  </Tab.Navigator>
// </NavigationContainer>
);

const myRouters = ({ params }) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Register" component={RegisterContainer} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Nav" component={tabRouters}/>
      
    </Stack.Navigator>
  </NavigationContainer>
);





export default myRouters;
