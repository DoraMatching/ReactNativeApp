import {
  loginSucessAction,
  loginFailedAction,
} from "../../actions/user/user.index";

import {
  REGISTER_USER,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED,
  LOGIN_USER,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_WITH_GITHUB,
  LOGIN_WITH_GITHUB_SUCCEEDED,
  LOGIN_WITH_GITHUB_FAILED,
  TEST,
} from "../../actions/user/user.actionTypes";
//Saga effects
import { call, put, takeLatest } from "redux-saga/effects";
import { Api } from "./user.api";
import { storage } from "./asyncStorage";
//import getGithubTokenAsync from "./getGithubTokenAsync";

export function* login(action) {
  try {
    // console.log("User in action", action.user);
    // console.log("Called in saga", "OK");
    const response = yield Api.loginFromApi(action.user);
    const { token } = response;
    yield storage.storeData(token);
    // console.log("responseFromAPI", response);
    yield put({ type: LOGIN_SUCCEEDED, response: response });
  } catch (error) {
    console.log("in catch saga", "NOT OK");
    yield put({ type: LOGIN_FAILED, error: error.message });
  }
}

export function* watchLogin() {

  yield takeLatest(LOGIN_USER, login);
}

// export function* loginWithGitHub() {
//   try {
//     const accessToken = yield getGithubTokenAsync();
//     const response = yield Api.loginWithGitHubFromAPI(accessToken);
//     yield put({ type: LOGIN_WITH_GITHUB_SUCCEEDED, response: response });
//   } catch (error) {
//     console.log("in catch saga", "NOT OK");
//     yield put({ type: LOGIN_WITH_GITHUB_FAILED, error: error });
//   }
// }

// export function* watchLoginWithGithub() {
//   yield takeLatest(LOGIN_WITH_GITHUB, loginWithGitHub);
// }
