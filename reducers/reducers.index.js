import { combineReducers } from 'redux';
import userReducers from './userReducers';
import testReducers from './testReducers';

const allReducers = combineReducers({
    userReducers,
    testReducers,
});
export default allReducers;