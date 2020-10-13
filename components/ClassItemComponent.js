import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { tagData } from "../data/tagData";
import TagItemComponent from './TagItemComponent';
export default class ClassItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return ( 
        <View style={{...styles.background}}>
            <View style={{...styles.container, ...styles.horizontalLayout}}>
                <View style={{...styles.durationContainer, justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{color : 'blueviolet', fontWeight: 'bold', fontSize: 24,}}>120</Text>
                    <Text style={{color: 'blueviolet', fontWeight: '200', fontSize: 13}}>hours</Text>
                </View>
                <View style={{marginLeft : 6, paddingRight: 10 }}>
                    <Text style={{fontWeight: 'bold', fontSize: 19}}>Xử lí tín hiệu số</Text>
                    <Text style={{fontSize: 13,}}>Ninh Khánh Duy</Text>
                    <FlatList
                        
                        horizontal={true}
                        data={tagData}
                        renderItem={({ item, index }) => {
                            return (
                                <TagItemComponent item={item} index={index} parentFlatList={this}>

                                </TagItemComponent>);
                        }}
                        keyExtractor={(item, index) => item.id.toString()}
                    >
                    </FlatList>
                    <Text>
                        25 trainees
                    </Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        padding: 10,
        width: '70%',
        borderColor: 'rgba(0, 0, 0, .5)',
        borderWidth: 0.75,
        borderRadius: 5,
    },
    durationContainer : {
        borderColor: "#8844ee",
        borderWidth: 2,
        borderRadius: 5,
        padding : 25,
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
    authorLabel : {
      fontWeight: 'bold',
    }
});

