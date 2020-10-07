import {
  REGISTER_USER,
  REGISTER_SUCCEEDED,
  REGISTER_FAILED,
  LOGIN_USER,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_WITH_GITHUB_SUCCEEDED,
  LOGIN_WITH_GITHUB_FAILED,
} from "../actions/user/user.actionTypes";

const userReducers = (users = [], action) => {
  console.log("First line in reducers", "OK");
  switch (action.type) {
    case LOGIN_SUCCEEDED:
    case LOGIN_WITH_GITHUB_SUCCEEDED:
      console.log("Login_succeeded in reducers", action.response);
      return { success: true, message: action.response };
    case LOGIN_FAILED:
    case LOGIN_WITH_GITHUB_FAILED:
      console.log("Login_failed in reducers", action.error);
      return { success: false, message: action.error };
    default:
      return { success: null, message: null };
  }
};
export default userReducers;
