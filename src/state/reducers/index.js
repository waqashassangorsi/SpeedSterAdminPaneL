import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import loginReducer from "./loginReducer";
import roleReducer from "./roleReducer";
const reducers = combineReducers({
	amount: amountReducer,
	amount1: loginReducer,
	amount2: roleReducer,
});
export default reducers;
