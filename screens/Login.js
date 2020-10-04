import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { GitHubSocialButton } from "react-native-social-buttons";
import * as Svg from "react-native-svg";
const { Circle, Rect } = Svg;
import editTextComponent from "../components/EditTextComponent";

const LoginScreen = (props) => {
  const { handleSubmit } = props;
  return (
    <View style={styles.authorizeLayout}>
      <Text style={styles.signInText}>Sign in</Text>
      <Field
        placeholder="Username or Email"
        component={editTextComponent}
        name="Username or email"
      />
      <Field
        placeholder="Password"
        component={editTextComponent}
        name="Password"
      />
      <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
      <View style={{ flexDirection: "row" }}>
        <CheckBox></CheckBox>
        <Text style={{ textAlignVertical: "center" }}>Remember me</Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blueviolet",
          height: 45,
          borderRadius: 5,
          marginTop: 30,
        }}
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      <GitHubSocialButton
        buttonViewStyle={{
          height: 45,
          marginLeft: 0,
          width: "100%",
          borderRadius: 5,
        }}
      ></GitHubSocialButton>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          marginTop: 30,
        }}
      >
        <Text>Don't have an account ? </Text>
        <Text>Sign up here</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  authorizeLayout: {
    flex: 1,
    flexDirection: "column",
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "flex-start",
  },
  signInText: {
    fontSize: 36,
    marginBottom: 100,
    marginTop: 40,
    color: "blueviolet",
  },
  forgotPasswordText: {
    textAlign: "right",
    fontSize: 13,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

const LoginForm = reduxForm({
  form: "login",
})(LoginScreen);
export default LoginForm;
