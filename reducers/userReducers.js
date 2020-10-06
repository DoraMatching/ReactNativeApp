import { REGISTER_USER, REGISTER_SUCCEEDED, REGISTER_FAILED, LOGIN_USER, LOGIN_SUCCEEDED, LOGIN_FAILED } from "../actions/user/user.actionTypes";

const userReducers = (users = [], action) => {
    console.log("Called in reducers", "OK");
    switch(action.type) {
        case LOGIN_SUCCEEDED: 
        console.log("Called in reducers", action.response);
            return action.response;
        default: 
            return "users";
    }
} 
export default userReducers;  