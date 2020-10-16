import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';
import BlogItemComponent from '../components/BlogItemComponent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : '',
      urlGetBlogs : 'http://192.168.21.207:4000/posts?page=1&limit=2&order=DESC',
      
    };
  }

  componentWillMount(){
    const { urlGetBlogs } = this.state
    this.props.onFetchBlogs({ urlGetBlogs });
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View
       
      >
       <SearchBar
        platform={"android"}
        containerStyle={{ elevation : 2}}
        placeholder="Search..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <FlatList
        style={{backgroundColor : "#C4C4C4", marginBottom: 80,}}
        data={this.props.blogs.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <BlogItemComponent {...item} />}
       />

      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})
