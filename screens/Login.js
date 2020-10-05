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
import Svg, {
  Circle,
  Ellipse,
  G,
 
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
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
      
      <View
      style={{ flexDirection: "row",
               alignItems: 'center', 
         justifyContent:'center',
         marginTop:10,
         marginBottom:5}}>
        <Svg width='100' height="2"   >
          <Line x1="0" y1="0" x2="100" y2="0" stroke="black"  />
        </Svg>
        <Text
        style={{
          paddingStart: 10,
          paddingEnd: 10,
          fontWeight: 'bold'
        }}>OR</Text>
        <Svg height="2" width="100" >
          <Line x1="0" y1="0" x2="100" y2="0" stroke="black"  />
        </Svg>
      </View>
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
