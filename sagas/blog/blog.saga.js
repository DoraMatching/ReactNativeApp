import { GET_BLOG, GET_BLOG_SUCCEEDED, GET_BLOG_FAILED } from "../../actions/blog/blog.actionType";
import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./blog.api";

function* fetchBlogs (action){
    try {
        const data = yield Api.getBlogsFromAPI(action.params);
        console.log("Blog.saga.js", data);
        yield put({type : GET_BLOG_SUCCEEDED, data});
    }
    catch(error){
        yield put({type: GET_BLOG_FAILED, error});
    }
}

export function* watchFetchBlogs(){
    console.log("Blog.saga.js", "watchFetchBlogs is called");
    yield takeLatest(GET_BLOG, fetchBlogs);
}