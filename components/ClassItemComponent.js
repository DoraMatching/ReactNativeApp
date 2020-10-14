import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { tagData } from "../data/tagData";
import TagItemComponent from './TagItemComponent';
export default class ClassItemComponent extends Component {
  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
    //     this.state = {  
    //         dataSource: ds.cloneWithRows(['Android','iOS', 'Java','Php', 'Hadoop',  
    //             'Sap', 'Python','Ajax', 'C++',  
    //             'Ruby', 'Rails','.Net', 'Perl']),  
    //     };  
  }

  render() {
    return ( 
        <View style={{...styles.background}}>
            <View style={{...styles.container, ...styles.horizontalLayout, alignContent: 'stretch', }}>
                <View style={{...styles.durationContainer, justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{color : 'blueviolet', fontWeight: 'bold', fontSize: 24,}}>120</Text>
                    <Text style={{color: 'blueviolet', fontWeight: '200', fontSize: 13}}>hours</Text>
                </View>
                <View style={{marginLeft : 6, paddingRight: 10, flex: 3, }}>
                    <Text style={{fontWeight: 'bold', fontSize: 19, color: 'black'}}>Xử lí tín hiệu số </Text>
                    <Text style={{fontSize: 13, color: 'black'}}>Ninh Khánh Duy</Text>
                  
                    <View style={{...styles.horizontalLayout,  marginBottom: 5, flexWrap: "wrap"}}>
                        {tagData.map(item => {
                                    return (
                                        <TagItemComponent item={item} >

                                                        </TagItemComponent>
                                    );
                                })}
                    </View>
                    <View style={{...styles.horizontalLayout, 
                                
                                alignItems: 'flex-end', 
                                justifyContent: 'flex-end',
                                alignSelf: 'flex-end',
                                position: 'absolute',
                                bottom: 0,
                                right: 0 }}>
                        <Image
                            style={{width: 20, height: 20}}
                            source={require('../images/learnerIcon.png')}
                        />
                        <Text style={{...styles.traineeText}}>
                            25 trainees
                        </Text>
                    </View>
                    
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
        height: 139,
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
    
    background : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    
    traineeText : {
        fontSize: 12,
        
    }
});

