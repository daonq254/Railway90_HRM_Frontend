import { combineReducers } from "redux";
import { formReducer } from "./FormReducer";

const RootReducers = combineReducers({
  formReducer,
});

export default RootReducers;
