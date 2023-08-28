export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "deposit",
			payload: amount,
		});
	};
};

export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "withdraw",
			payload: amount,
		});
	};
};

export const multiplyMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: "multiply",
			payload: amount,
		});
	};
};

export const loginData = (amount1) => {
	return (dispatch) => {
		dispatch({
			type: "logindata",
			payload: amount1,
		});
	};
};

export const roleData = (amount2) => {
	return (dispatch) => {
		dispatch({
			type: "roledata",
			payload: amount2,
		});
	};
};
