//Saga effects
import { call, fork, all } from "redux-saga/effects";
import {
  watchLogin,
  watchLoginWithGithub,
  watchRegister,
} from "./user/user.sagas";
import { watchFetchBlogs } from "./blog/blog.saga";

export default function* rootSaga() {
  console.log("rootSaga", "ok");
  yield all([
    fork(watchLogin),
    fork(watchLoginWithGithub),
    fork(watchRegister),
    fork(watchFetchBlogs),
  ]);
}
