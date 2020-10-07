//Saga effects
import { call, fork, all } from "redux-saga/effects";
import { watchLogin, watchLoginWithGithub } from "./user/user.sagas";

export default function* rootSaga() {
  console.log("rootSaga", "ok");
  yield all([watchLogin(), watchLoginWithGithub()]);
}
