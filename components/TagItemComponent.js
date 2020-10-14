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
        // <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.tagText}> {this.props.item.name} </Text>
            </View>
        // </View>
    );
  }

  
}

const styles = StyleSheet.create({
    container : {
        padding: 3,
        marginEnd: 5,
        marginTop: 3,
        backgroundColor: "#ededed",
        borderRadius: 5,
        
    },
    tagText: {
        color: 'black',
        fontSize: 10,
        
    },
    background : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height : 18,
        borderColor: 'black',
        borderWidth: 2,
    }
});