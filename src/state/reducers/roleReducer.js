const value = [];
const reducer = (state = value, action) => {
	if (action.type === "roledata") {
		//return action.payload;
		return action.payload;
	} else {
		return state;
	}
};
console.log("value234234", value);
export default reducer;
