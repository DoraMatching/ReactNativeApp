import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginForm, { LoginContainer } from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import Home from "../screens/Home";

const Stack = createStackNavigator();
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
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default myRouters;
