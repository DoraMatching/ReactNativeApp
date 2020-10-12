import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import editTextComponent from "../components/EditTextComponent";

const RegisterScreen = (props) => {
  return (
    <View style={styles.authorizeLayout}>
      <Text style={styles.signUpText}>Sign up</Text>
      <Field
        name={"Username"}
        props={{
          placeholder: "Username",
        }}
        component={editTextComponent}
      />
      <Field
        name={"Email"}
        props={{
          placeholder: "Email",
          keyboardType: "email-address",
        }}
        component={editTextComponent}
      />
      <Field
        name={"Phone number"}
        props={{
          placeholder: "Phone number",
          keyboardType: "phone-pad",
        }}
        component={editTextComponent}
        name="Phone number"
      />
      <Field
        name={"password"}
        props={{
          placeholder: "Password",
          secureTextEntry: true,
        }}
        component={editTextComponent}
      />
      <Field
        name={"confirmPassword"}
        props={{
          placeholder: "Confirm password",
          secureTextEntry: true,
        }}
        component={editTextComponent}
      />
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
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
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
  signUpText: {
    fontSize: 36,
    marginBottom: 100,
    marginTop: 40,
    color: "blueviolet",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});

export default RegisterScreen;
