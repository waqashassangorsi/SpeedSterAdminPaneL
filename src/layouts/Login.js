import React from "react";
import $ from "jquery";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "../components/App/App";
// react-bootstrap components
import {
	Badge,
	Button,
	Card,
	Navbar,
	Nav,
	Container,
	Table,
	Row,
	Col,
} from "react-bootstrap";
import "assets/css/login.css";
import "assets/js/custom.js";

const initialState = {
	count: 0,
};

// const store = createStore(() => ({
//   birds: [
//     {
//       name: 'robin',
//       views: 1
//     }
//   ]
// }));
// console.log('store',store.getState());
// const birds=store.getState();

function Login(props) {
	console.log("logingetlocalstorage", localStorage.getItem("userid"));
	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const email = $("#email").val();
			const pass = $("#pass").val();
			if (email != "" && pass != "") {
				const formData = new FormData();
				formData.append("email", email);
				formData.append("password", pass);
				const response = await fetch(
					"http://speedster.book2say.com/Authentication/admin_login",
					{
						method: "POST",
						body: formData,
					}
				);
				const data = await response.json();
				if (data.status == true) {
					localStorage.setItem("userid", data.data.u_id);
					props.history.push("/admin/Dashboard");
				} else {
					alert("No Record Found");
				}
				console.log(data);
			} else {
				alert("Please Enter email and password");
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			{/* <Provider store={store}>
      <App />
    </Provider> */}
			<Container fluid>
				<Row>
					<Col md="12">
						<form class="loginform" onSubmit={handleSubmit}>
							<div className="login_img">
								<img src={require("assets/img/speedster.png")} alt="..." />
							</div>

							<div class="col-sm-12 signin_heading">
								<h4>Sign In</h4>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="text"
									class="form-control"
									id="email"
									value="waqashassan100@gmail.com"
								/>
							</div>
							<div class="form-group login_password">
								<label for="exampleInputPassword1">Password</label>
								<input
									type="password"
									class="form-control"
									id="pass"
									value="123"
								/>
							</div>
							<button type="submit" class="btn btn-primary login_submitbtn">
								Sign In
							</button>
						</form>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Login;
