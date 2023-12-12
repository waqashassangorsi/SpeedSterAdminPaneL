/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import Login from "layouts/Login.js";
import { Provider } from "react-redux";
import { store } from "state/store";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "state/index";

const App = () => {
  const amount1 = useSelector((state) => state.amount1);
  const dispatch = useDispatch();
  const { loginData } = bindActionCreators(actionCreators, dispatch);
  // useEffect(() => {
  //   // Retrieve values from local storage
  //   const storedUserId = localStorage.getItem("userid");

  //   // Do something with the values if needed
  //   console.log("Stored UserId:", storedUserId);
  //   console.log("Stored Email:", storedEmail);

  // }, []);
  window.addEventListener("unload", function (event) {
    const currentUrl = window.location.href;

    console.log("indextes", currentUrl);
    window.location.href(currentUrl);
  });

  let element;

  //if (amount1 !== 0) {
  //console.log("amount1", amount1);
  element = (
    // <BrowserRouter>
    //   <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
    //   <Redirect from="/" to="/admin/dashboard" />
    //   <Route path="/login" render={(props) => <Login {...props} />} />
    //   <Redirect from="/" to="/login/login" />
    // </BrowserRouter>

    <Router>
      <Route path="/admin" component={AdminLayout} />
      <Route path="/login" component={Login} />
    </Router>
  );
  //} else {
  //console.log("amount1", amount1);
  // element = (
  // 	<BrowserRouter>
  // 		<Route path="/login" render={(props) => <Login {...props} />} />
  // 		<Redirect from="/" to="/login/login" />
  // 	</BrowserRouter>
  // );
  //	}

  return <>{element}</>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//const getlocalstorage=localStorage.getItem("userid");

//if(getlocalstorage!=null){
// const element = (
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
// 			<Redirect from="/" to="/admin/dashboard" />
// 			<Route path="/login" render={(props) => <Login {...props} />} />
// 			<Redirect from="/" to="/login/login" />
// 		</BrowserRouter>
// 	</Provider>
// );
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
//}else{
//   const element=  (
//   <BrowserRouter>
//     <Route path="/login" render={(props) => <Login {...props} />} />
//     <Redirect from="/" to="/login/login" />
// </BrowserRouter>
//   );
//   root.render(element);
//}
