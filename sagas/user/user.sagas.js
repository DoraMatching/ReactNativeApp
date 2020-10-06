import { REGISTER_USER, REGISTER_SUCCEEDED, REGISTER_FAILED, LOGIN_USER, LOGIN_SUCCEEDED, LOGIN_FAILED } from "../../actions/user/user.actionTypes";

//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './user.api';

function* login(action){
    try{
        console.log("Called in saga", "OK");
        const response = yield Api.loginFromApi(action.user);
        yield put({type: LOGIN_SUCCEEDED, response });
    }
    catch (error) {
        yield put({type: LOGIN_FAILED, error });
    }
}

export function* watchLogin() {
    console.log("from watch login saga", "ok");
    yield takeLatest(LOGIN_USER, login)
}