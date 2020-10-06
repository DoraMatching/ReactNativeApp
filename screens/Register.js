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
        placeholder="Username"
        component={editTextComponent}
        name="Username"
      />
      <Field placeholder="Email" component={editTextComponent} name="Email" />
      <Field
        placeholder="Phone number"
        component={editTextComponent}
        name="Phone number"
      />
      <Field
        placeholder="Password"
        component={editTextComponent}
        name="Password"
      />
      <Field
        placeholder="Confirm password"
        component={editTextComponent}
        name="Confirm password"
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

const RegisterForm = reduxForm({
  form: "register",
})(RegisterScreen);
export default RegisterForm;
