import React, { Component } from "react";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import $ from "jquery";
import logo from "assets/img/reactlogo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import "../../assets/css/demo.css";

function Sidebar({ color, image, routes }) {
  const amount1 = useSelector((state) => state.amount1);
  const dispatch = useDispatch();
  const { loginData } = bindActionCreators(actionCreators, dispatch);
  const history = useHistory();
  const location = useLocation();
  const excludedRoutes = ["/addpromocode"];
  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  const handleLogout = () => {
    loginData(0);
  };

  $(document).on("click", ".pricing", function () {
    history.push("/admin/pricing");
  });

  $(document).on("click", ".user_link", function () {
    history.push("/admin/usermanagement");
  });

  $(document).on("click", ".user_roles", function () {
    history.push("/admin/role");
  });

  $(document).on("click", ".user_updaterecord", function () {
    history.push("/admin/updaterecord");
  });

  console.log("loginDataasdasd", amount1);

  var dashboard_id = "";
  var delivery_details = "";
  var driver_details = "";
  var enduser = "";
  var rides = "";
  var promocode = "";
  var usermanagement = "";
  var setting = "";
  var calim = "";
  var transaction = "";

  if (amount1 !== 0) {
    console.log("amount123123", amount1.u_id);
    if (amount1.roles !== null) {
      if (amount1.roles.length > 0) {
        console.log("amount1.roles", amount1.roles);
        var newdata = amount1.roles;
        console.log("amount123123", newdata);

        if (newdata.some((item) => item.privilages === "dashboard")) {
          dashboard_id = "show_dashboard";
        } else {
          dashboard_id = "hide_dashboard";
        }

        if (newdata.some((item) => item.privilages === "delivery_details")) {
          delivery_details = "show_delivery_details";
        } else {
          delivery_details = "hide_delivery_details";
        }

        if (newdata.some((item) => item.privilages === "driver_details")) {
          driver_details = "show_driver_details";
        } else {
          driver_details = "hide_driver_details";
        }

        if (newdata.some((item) => item.privilages === "enduser")) {
          enduser = "show_enduser";
        } else {
          enduser = "hide_enduser";
        }
        if (newdata.some((item) => item.privilages === "rides")) {
          rides = "show_rides";
        } else {
          rides = "hide_rides";
        }
        if (newdata.some((item) => item.privilages === "promocode")) {
          promocode = "show_promocode";
        } else {
          promocode = "hide_promocode";
        }

        if (newdata.some((item) => item.privilages === "usermanagement")) {
          usermanagement = "show_usermanagement";
        } else {
          usermanagement = "hide_usermanagement";
        }

        if (newdata.some((item) => item.privilages === "setting")) {
          setting = "show_setting";
        } else {
          setting = "hide_setting";
        }

        if (newdata.some((item) => item.privilages === "claim")) {
          calim = "show_claim";
        } else {
          calim = "hide_claim";
        }

        if (newdata.some((item) => item.privilages === "transaction")) {
          transaction = "show_transaction";
        } else {
          transaction = "hide_transaction";
        }
      }
    }
  }

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a href="/admin/dashboard" className="simple-text logo-mini mx-1">
            <div className="logo-img">
              <img
                src={require("assets/img/speedster.png")}
                alt="..."
                class="side_barlogo"
              />
            </div>
          </a>
        </div>

        <Nav>
          <li>
            <NavLink
              to="/admin/dashboard"
              className="nav-link"
              activeClassName="active"
              id={dashboard_id}
            >
              <i className="nc-icon nc-bullet-list-67" />
              <p>Dashboard</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/deliverrequest"
              className="nav-link"
              activeClassName="active"
              id={delivery_details}
            >
              <i className="nc-icon nc-bus-front-12" />
              <p>Delivery Request</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/table"
              className="nav-link"
              activeClassName="active"
              id={driver_details}
            >
              <i className="nc-icon nc-circle-09" />
              <p>Drivers</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/typography"
              className="nav-link"
              activeClassName="active"
              id={enduser}
            >
              <i className="nc-icon nc-single-02" />
              <p>Enduser</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/promocode"
              className="nav-link"
              activeClassName="active"
              id={promocode}
            >
              <i className="nc-icon nc-notes" />
              <p>Promocode</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/usermanagement"
              className="nav-link user_management"
              activeClassName="active"
              id={usermanagement}
            >
              <i className="nc-icon nc-preferences-circle-rotate" />
              <p>User Management</p>
            </NavLink>

            <ul class="user_managementsetting close1">
              <li class="user_link">Users</li>
              <li class="user_roles">Roles</li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/admin/pricing"
              className="nav-link settingdata"
              activeClassName="active"
              id={setting}
            >
              <i className="nc-icon nc-settings-gear-64" />
              <p>Setting</p>
            </NavLink>
            <ul class="submenu_setting close">
              <li class="pricing">Pricing</li>
              <li class="user_updaterecord">Update Setting</li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/admin/claim"
              className="nav-link"
              activeClassName="active"
              id={calim}
            >
              <i className="nc-icon nc-single-copy-04" />
              <p>Claim</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/transaction"
              className="nav-link"
              activeClassName="active"
              id={transaction}
            >
              <i className="nc-icon nc-single-copy-04" />
              <p>Transaction</p>
            </NavLink>
          </li>

          <li onClick={handleLogout}>
            <NavLink
              to="/login/login"
              className="nav-link"
              activeClassName="active"
            >
              <i className="nc-icon nc-button-power" />
              <p>Logout</p>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
