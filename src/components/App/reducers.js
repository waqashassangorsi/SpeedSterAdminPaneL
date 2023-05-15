import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
// Import other reducers if needed

const rootReducer = combineReducers({
	counter: counterReducer,
	// Add other reducers here
});

export default rootReducer;
