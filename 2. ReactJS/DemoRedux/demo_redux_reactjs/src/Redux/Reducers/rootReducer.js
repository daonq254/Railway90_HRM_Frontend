import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { formReducer } from "./formReducer";

let rootReducer = combineReducers({
  accountReducer, // account.listAccount
  formReducer, // form.isShowInputForm
});

export default rootReducer;
