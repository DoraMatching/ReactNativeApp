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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabRouters = () => (
  <Tab.Navigator
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
