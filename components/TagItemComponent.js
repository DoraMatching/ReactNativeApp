import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { watchRegister } from '../sagas/user/user.sagas';

export default class TagItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.tagText}> TensorflowSharp </Text>
            </View>
        </View>
    );
  }

  
}

const styles = StyleSheet.create({
    container : {
        padding: 5,
        
        backgroundColor: "#ededed",
        borderRadius: 5,
    },
    tagText: {
        color: '#999999',
    },
    background : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});