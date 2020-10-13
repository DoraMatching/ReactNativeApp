import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PostIcon from '../images/postIcon.svg';
export default class QuestionItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    return (
        <View style={{...styles.background}}>
      <View style={{...styles.container, ...styles.verticalLayout}}>
          <View style={{...styles.horizontalLayout}}>
          
                <View style={{...styles.verticalLayout}}>
                    <Text style={{...styles.title}}>
                    UI Components và bước đầu hướng đến MicroViewControllers trong lập trình iOS 
                    </Text>
                    <Text style={{...styles.time}}>
                        2 minutes ago
                    </Text>
                </View>
          </View>
        <Text> QuestionItemComponent </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        padding: 5,
        
        
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
    },
    time: {
        fontSize: 10,
        fontWeight: "300",
    },
    background : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
