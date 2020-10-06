import { REGISTER_USER, REGISTER_SUCCEEDED, REGISTER_FAILED, LOGIN_USER, LOGIN_SUCCEEDED, LOGIN_FAILED, TEST } from "./user.actionTypes";

export const registerUserAction = (user) => {
    return {
        type : REGISTER_USER,
        user
    }
};

export const loginUserAction = (user) => {
    console.log("Called in action", user);
    return {
        type: LOGIN_USER,
        user
    }
}

export const loginSucessAction = (response) => {
    return {
        type: LOGIN_SUCCEEDED,
        response
    }
}

export const loginFailedAction = (error) => {
    return {
        type: LOGIN_FAILED,
        error
    }
} 

export const loginTestAction = () => {
    return {
        type: TEST,
        test: "OK"
    }
} 
