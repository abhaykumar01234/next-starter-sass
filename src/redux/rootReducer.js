import { combineReducers } from "redux";
import { tickReducer, counterReducer } from "./reducers";

const rootReducer = combineReducers({
  tick: tickReducer,
  counter: counterReducer,
});

export default rootReducer;
