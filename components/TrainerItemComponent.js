import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const width = 137;
export default class TrainerItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{...styles.background}}>
      <View style={{...styles.container, ...styles.border}}>
      <Image
            style={{width: width, height: 118,}}
            source={{
                uri: 'https://st3.depositphotos.com/3369547/12872/v/950/depositphotos_128727528-stock-illustration-happy-boy-character-avatar.jpg',
              }}
        />
        <Text style={{...styles.trainerText}}>Trần Văn A</Text>
        <Text style={{...styles.topicText}}>C#, Ruby on Rails</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        //padding: 10,
        // width: '100%',
        
    },
    horizontalLayout: {
        flexDirection: 'row',
    },
    verticalLayout: {
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color : '#000',
        
    },
    time: {
        fontSize: 10,
        fontWeight: "300",
        paddingEnd: 5,
        marginBottom: 5,
    },
    background : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText : {
      marginTop: 10,
      color: "#000",
    },
    trainerText : {
      fontWeight: 'bold',
      fontSize: 14,
      marginLeft: 5,
      color: "#000",
    },
    topicText : {
        fontSize: 13,
        marginLeft: 5,
    },
    border: {
        borderTopLeftRadius: 5 ,
        borderTopRightRadius: 5,
        borderColor: 'rgba(0, 0, 0, .5)',
        borderWidth: 3,
    }
});
