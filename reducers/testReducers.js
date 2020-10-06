import { TEST } from "../actions/user/user.actionTypes";

const testReducers = (action) => {
    switch(action.type) {
        case TEST: 
            return "Test OK";
        default: 
            return "Test default";
    }
}   
export default testReducers;