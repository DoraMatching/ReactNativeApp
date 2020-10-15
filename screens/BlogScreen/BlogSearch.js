import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PostSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{justifyContent : 'center', alignItems: 'center'}}>
        <Text> PostSearch </Text>
      </View>
    );
  }
}
