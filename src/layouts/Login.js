import React, { useState } from "react";
import $ from "jquery";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "../components/App/App";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { storeurl } from "components/App/storeurl";
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

function Login(props) {
  const [mypass, setmypass] = useState("");
  const [myemail, setmyemail] = useState("");
  const amount1 = useSelector((state) => state.amount1);
  const dispatch = useDispatch();
  const { loginData } = bindActionCreators(actionCreators, dispatch);
  console.log("loginData", amount1);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const email = $("#email").val();
      const pass = $("#pass").val();
      if (email != "" && pass != "") {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", pass);
        const response = await fetch(`${storeurl}admin_login`, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("logindata123",data)

        if (data.status == true) {
          if (data.data.u_id != "") {
            loginData(data.data);
            localStorage.setItem("userid", data.data.u_id);
            props.history.push("/admin/Dashboard");
          } else {
            alert("No Record Found");
          }
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

  function onchangefunctionpass(event) {
    setmypass(event.target.value);
  }

  function onchangefunctionemail(event) {
    setmyemail(event.target.value);
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <form className="loginform" onSubmit={handleSubmit}>
              <div className="login_img">
                <img src={require("assets/img/speedster.png")} alt="..." />
              </div>

              <div className="col-sm-12 signin_heading">
                <h4>Sign In</h4>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={myemail}
                  onChange={onchangefunctionemail}
                />
              </div>
              <div className="form-group login_password">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  value={mypass}
                  onChange={onchangefunctionpass}
                />
              </div>
              <button type="submit" className="btn btn-primary login_submitbtn">
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
