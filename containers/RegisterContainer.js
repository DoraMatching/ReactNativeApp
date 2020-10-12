import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { registerUserAction } from "../actions/user/user.index";
import RegisterScreen from "../screens/Register";
const mapStateToProps = (state) => {
  return {
    user: state.userReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: ({ username, email, password }) => {
      dispatch(registerUserAction({ username, email, password }));
    },
  };
};

const RegisterForm = reduxForm({
  form: "register",
})(RegisterScreen);

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

export default RegisterContainer;
