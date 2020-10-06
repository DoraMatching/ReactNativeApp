import { connect } from 'react-redux';
import { LoginScreen } from "../screens/Login";
import {  loginUserAction, loginTestAction } from "../actions/user/user.index";
import { Field, reduxForm } from "redux-form";
const mapDispatchToProps = (dispatch) => {
    console.log("dispatch", dispatch);
    return {  
        onSubmitForm :  () => {
            console.log("called");
            dispatch( loginUserAction({username: "raymond", password:"raymond123#"}));
        } 
    }
};

const mapStateToProps = (state) => {        
    console.log("mapSTate To Prop", "OK")
    console.log("state", state);
    return {        
        userTest: state.userReducers
    }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const LoginForm = reduxForm({
    form: "login",
  })(LoginContainer);
  export default LoginForm;