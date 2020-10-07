import { registerRootComponent } from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
//import App from './App';
//Redux saga
//import createSagaMiddleware from 'redux-saga';
//import rootSaga from './sagas/rootSaga';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducers from "./reducers/userReducers";
import testReducers from "./reducers/testReducers";
import LoginForm from "./containers/LoginContainer";
//Redux saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { watchLogin } from "./sagas/user/user.sagas";

const sagaMiddleware = createSagaMiddleware();
console.log("sagaMiddleware", sagaMiddleware);

const rootReducer = combineReducers({
  
  userReducers,
  form:formReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <LoginForm></LoginForm>
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
