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
import getGithubTokenAsync from "./getGithubTokenAsync";

export function* login(action) {
  try {
    // console.log("User in action", action.user);
    // console.log("Called in saga", "OK");
    const response = yield Api.loginFromApi(action.user);
    if (action.user.toggleCheckBox) {
      // console.log("in login saga", "OK");
      const { token } = response;
      yield storage.storeData(token);
      // console.log("token", yield storage.getData());
    }

    // console.log("responseFromAPI", response);
    yield put({ type: LOGIN_SUCCEEDED, response: response });
  } catch (error) {
    // console.log("in catch saga", error);
    yield put({ type: LOGIN_FAILED, error: "Invalid username or password" });
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_USER, login);
}

export function* loginWithGitHub() {
  try {
    console.log("in saga login with Github", "OK");
    const { accessToken, ...datas } = yield getGithubTokenAsync();
    console.log("DATAS", datas);
    console.log("in saga login with Github", accessToken);
    const response = yield Api.loginWithGitHubFromAPI(accessToken);
    yield put({ type: LOGIN_WITH_GITHUB_SUCCEEDED, response: response });
  } catch (error) {
    // console.log("in catch saga with Github", "NOT OK");
    yield put({ type: LOGIN_WITH_GITHUB_FAILED, error: error });
  }
}

export function* watchLoginWithGithub() {
  yield takeLatest(LOGIN_WITH_GITHUB, loginWithGitHub);
}

function* register(action) {
  try {
    const response = yield Api.registerFromAPI(action.user);
    yield put({ type: REGISTER_SUCCEEDED, response: response });
  } catch (error) {
    yield put({ type: REGISTER_FAILED, error: "Try again !" });
  }
}

export function* watchRegister() {
  yield takeLatest(REGISTER_USER, register);
}
