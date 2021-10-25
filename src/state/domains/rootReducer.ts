import {combineReducers} from "redux";
import {LoginReducer} from "./login/loginReducer";

export const rootReducer = combineReducers({
  login: LoginReducer
})
