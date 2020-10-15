import { GET_BLOG, GET_BLOG_SUCCEEDED, GET_BLOG_FAILED } from "./blog.actionType";

export const getBlogsAction = (params) => {
    return {
      type: GET_BLOG,
      params,
    };
  };
  
  export const getBlogsSucessAction = (data) => {
    return {
      type: GET_BLOG_SUCCEEDED,
      data,
    };
  };
  
  export const getBlogsFailedAction = (error) => {
    return {
      type: GET_BLOG_FAILED,
      error,
    };
  };