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

//Validation
const required = value => {
  console.log("validate username", value);
  return value ? undefined : 'The field is required';
}
const isValidEmail = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;



const RegisterScreen = ({handleSubmit, onSubmit, user, navigation}) => {
  const submit = values => {
      console.log("register", values);
      const {username, email, phoneNumber, password} = values;
      username = username.toLowerCase();
      onSubmit({username, email, password});
  };
  if (user.success === true){
      navigation.navigate("Home");
  }
  return (
    <View style={styles.authorizeLayout}>
      <Text style={styles.signUpText}>Sign up</Text>
      <Field
        name={"username"}
        props={{
          placeholder: "Username",
        }}
        component={editTextComponent}
        validate = {required}
      />
      <Field
        name={"email"}
        props={{
          placeholder: "Email",
          keyboardType: "email-address",
        }}
        component={editTextComponent}
        validate = {isValidEmail}
      />
      <Field
        name={"phoneNumber"}
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
        validate = {required}
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
        onPress={handleSubmit(submit)}
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
