//Saga effects
import { fork } from 'redux-saga/effects';
import { watchLogin } from './user/user.sagas';


export default function* rootSaga() {
    console.log("rootSaga", "ok");
    yield [
        fork(watchLogin),
    ];
}