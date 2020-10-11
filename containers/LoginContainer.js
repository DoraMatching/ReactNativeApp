import { connect } from "react-redux";
import { LoginScreen } from "../screens/Login";
import {
  loginUserAction,
  loginUserWithGitHubAction,
} from "../actions/user/user.index";
import { Field, reduxForm } from "redux-form";
const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    onSubmitForm: ({ username, email, password, toggleCheckBox }) => {
      // console.log("onSubmitForm is called");
      dispatch(loginUserAction({ username, email, password, toggleCheckBox }));
    },
    onSubmitGithubForm: () => {
      dispatch(loginUserWithGitHubAction());
    },
  };
};

const mapStateToProps = (state) => {
  console.log("in map state To Prop", "YES");
  return {
    user: state.userReducers,
  };
};

const LoginForm = reduxForm({
  form: "login",
})(LoginScreen);

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginForm;
