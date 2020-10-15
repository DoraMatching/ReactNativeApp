import { connect } from "react-redux";
import  Home  from "../screens/Home";
import {
    getBlogsAction,
  } from "../actions/blog/blog.index";

const mapStateToProps = (state) => {
    return {
        blogs : state.blogReducers,
    }
   
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchBlogs : (params) => {
            dispatch(getBlogsAction(params))
        },
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

export default HomeContainer;