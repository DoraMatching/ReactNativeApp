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
} from "./user.actionTypes";

export const registerUserAction = (user) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

export const loginUserAction = (user) => {
  // console.log("Login action", user);
  return {
    type: LOGIN_USER,
    user,
  };
};

export const loginUserWithGitHubAction = () => {
  // console.log("Login with GitHub action");
  return {
    type: LOGIN_WITH_GITHUB,
  };
};

export const loginSucessAction = (response) => {
  return {
    type: LOGIN_SUCCEEDED,
    response,
  };
};

export const loginFailedAction = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

export const loginWithGitHubSucessAction = (response) => {
  return {
    type: LOGIN_WITH_GITHUB_SUCCEEDED,
    response,
  };
};

export const loginWithGitHubFailedAction = (error) => {
  return {
    type: LOGIN_WITH_GITHUB_FAILED,
    error,
  };
};

export const loginTestAction = () => {
  return {
    type: TEST,
    test: "OK",
  };
};
