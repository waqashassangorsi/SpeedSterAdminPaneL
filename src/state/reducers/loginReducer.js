const value = 0;
const reducer = (state = value, action) => {
	if (action.type === "logindata") {
		return action.payload;
	} else {
		return state;
	}
};
console.log("value", value);
export default reducer;
