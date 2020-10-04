import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { StyleSheet, View, TextInput, Text } from "react-native";

const editTextComponent = ({ placeholder, name }) => {
  return (
    <View>
      <TextInput
        style={styles.roundedField}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  roundedField: {
    height: 45,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#f5f5f5",
    paddingLeft: 10,
  },
});

export default editTextComponent;
