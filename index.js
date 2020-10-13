import { registerRootComponent } from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";

import userReducers from "./reducers/userReducers";
//import LoginForm from "./containers/LoginContainer";

import MyRouters from "./routers/router";
//Redux saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

//import  TagItemComponent  from "./components/TagItemComponent";
import QuestionItemComponent from "./components/QuestionItemComponent";

const sagaMiddleware = createSagaMiddleware();
console.log("sagaMiddleware", sagaMiddleware);

const rootReducer = combineReducers({
  userReducers,
  form: formReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <MyRouters></MyRouters>
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(QuestionItemComponent);
