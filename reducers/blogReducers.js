import { GET_BLOG, GET_BLOG_SUCCEEDED, GET_BLOG_FAILED } from "../actions/blog/blog.actionType";



const blogReducers = (blogs = [], action) => {
  switch (action.type) {

  case GET_BLOG_SUCCEEDED:
    return action.data;
  case GET_BLOG_FAILED:
    return [];

  default:
    return blogs
  }
};

export default blogReducers;
