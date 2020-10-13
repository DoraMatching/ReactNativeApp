import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { registerUserAction } from "../actions/user/user.index";
import RegisterScreen from "../screens/Register";

const validate = values => {
  const errors = {};
  
  if (!values.confirmPassword ) {
    errors.confirmPassword = 'The field is required' ;
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Password mismatched' ;
  }

    return errors;


};

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
  validate,
})(RegisterScreen);

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

export default RegisterContainer;
