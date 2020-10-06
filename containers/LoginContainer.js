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
    onSubmitForm: () => {
      console.log("onSubmitForm is called");
      dispatch(
        loginUserAction({ username: "raymond", password: "raymond123#" })
      );
    },
    onSubmitGithubForm: () => {
      dispatch(loginUserWithGitHubAction());
    },
  };
};

const mapStateToProps = (state) => {
  //console.log("map state To Prop", "OK");
  console.log("map state To Prop", state);
  return {
    userTest: state.userReducers ? state.userReducers.name : "",
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const LoginForm = reduxForm({
  form: "login",
})(LoginContainer);
export default LoginForm;
