import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { StyleSheet, View, TextInput, Text } from "react-native";


const editTextComponent = ({ meta: { touched, error, warning }, input: { onChange, ...input }, ...rest}) => {
  return (
    <View style = {styles.view}>
      {touched && ((error && <Text style={{ color: 'red', ...styles.errorText }}>{error}</Text>) ||
                (warning && <Text style={{ color: 'orange', ...styles.errorText }}>{warning}</Text>))}
      <TextInput
        style={styles.roundedField}
        onChangeText={onChange} {...input} {...rest}
      ></TextInput>
      
    </View>
  );
};

const styles = StyleSheet.create({
  roundedField: {
    height: 45,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#e4e6e8",
    paddingLeft: 10,
  },
  view: {
    flexDirection: 'column',
  },
  errorText: {
    marginBottom: 10,
  }
});

export default editTextComponent;
