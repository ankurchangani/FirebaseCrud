import { combineReducers } from "redux";
import empReducer from "./empReducer";
import authReducer from "./authReducer"

const rootReducer = combineReducers ({
    empReducer ,
    authReducer ,
})

export default rootReducer