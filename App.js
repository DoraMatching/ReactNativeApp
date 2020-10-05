import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import LoginForm from "./screens/Login";
import RegisterForm from "./screens/Register";

export default function App() {
  return (
    <Provider store={store}>
      <RegisterForm></RegisterForm>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
