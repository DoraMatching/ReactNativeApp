import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { tagData } from "../data/tagData";
import TagItemComponent from './TagItemComponent';
import Svg, { Line } from "react-native-svg";

import unlikedIcon from '../images/unlikedIcon.png';
import likedIcon from '../images/likedIcon.png';


export default class QuestionItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked : false,
    };
  }

  render() {
    var imgSrc = this.state.isLiked ? likedIcon : unlikedIcon;
    return (
        <View style={{...styles.background}}>
      <View style={{...styles.container, ...styles.verticalLayout}}>
          <View style={{...styles.horizontalLayout}}>
                <Image
                  style={{width: 34, height: 30}}
                  source={require('../images/postIcon.png')}
                />
                <View style={{...styles.verticalLayout, paddingStart: 10,}}>
                    <Text style={{...styles.title}}>
                    UI Components và bước đầu hướng đến Micro View Controllers trong lập trình iOS 
                    </Text>
                    <Text style={{...styles.time}}>
                        2 minutes ago
                    </Text>
                    <FlatList
                       
                        horizontal={true}
                        data={tagData}
                        renderItem={({ item, index }) => {
                            return (
                                <TagItemComponent item={item} index={index} parentFlatList={this}>

                                </TagItemComponent>);
                        }}
                        keyExtractor={(item, index) => item.id}
                    >
                    </FlatList>
                </View>
          </View>
          <Image
            style={{width: '100%', marginTop: 10,}}
            resizeMode = 'cover'
            source={require('../images/feature_image_02.jpeg')}
          />
          <Text style={styles.descriptionText}>
            Mình thật sự chưa biết CSS Reset là gì cho đến khi mình gặp một vài vấn đề liên quan trong quá trình code giao diện. Hôm bữa mình ...
            <Text style={{...styles.authorLabel}}> Written by </Text>
            <Text>ABC</Text>
          </Text>
          <Svg width="100%" height="2" style={{marginTop: 10, marginEnd: 10, marginBottom: 5,}}>
              <Line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="1.5"/>
          </Svg>
          <View style={{...styles.horizontalLayout, justifyContent: 'space-around'}}>
            <TouchableOpacity style={{...styles.horizontalLayout, alignItems: 'center',}}
            onPress={() => this.setState({isLiked : !this.state.isLiked})}>
              <Image
                style={{width: 25, height: 25, marginEnd: 2,}}
                source={imgSrc}
              />
              <Text style={{fontSize: 13,paddingTop: 5}}>25 likes</Text>
            </TouchableOpacity>
            <View style={{...styles.horizontalLayout, marginTop: 5,}}>
              <Image
                style={{width: 20, height: 20, marginEnd: 5,}}
                source={require('../images/commentIcon.png')}
              />
              <Text style={{fontSize: 13,}}>25 comments</Text>
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
        width: '100%',
        
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
