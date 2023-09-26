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
	//	const amount = useSelector((state) => state.amount2);

	const amount1 = useSelector((state) => state.amount1);
	const dispatch = useDispatch();
	const { loginData } = bindActionCreators(actionCreators, dispatch);
	//console.log("sidebar", amount.length);
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
		//setshowdashboardchild(!showdashboardchild);
		//roleData("dashboard");
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

	if (amount1 !== 0) {
		console.log("amount123123", amount1.u_id);
		if (amount1.roles !== null) {
			if (amount1.roles.length > 0) {
				console.log("amount1.roles", amount1.roles);
				var newdata = amount1.roles;
				//newdata.forEach(function (checkbox) {
				console.log("amount123123", newdata);

				// if (checkbox.privilages === "dashboard") {
				// 	dashboard_id = "show_dashboard";
				// } else {
				// 	dashboard_id = "hide_dashboard";
				// }

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

				// if (newdata.some((item) => item.privilages === "rides")) {
				// 	rides = "show_rides";
				// } else {
				// 	rides = "hide_rides";
				// }

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

				// if (newdata.includes("dashboard")) {
				// 	dashboard_id = "show_dashboard";
				// } else {
				// 	dashboard_id = "hide_dashboard";
				// }
				//});

				// if (amount1.roles.includes("dashboard")) {
				// 	dashboard_id = "show_dashboard";
				// } else {
				// 	dashboard_id = "hide_dashboard";
				// }
			}
		}
		// if (amount1.includes("dashboard")) {
		// 	dashboard_id = "show_dashboard";
		// } else {
		// 	dashboard_id = "hide_dashboard";
		// }
		// amount1.forEach(function (checkbox) {
		// 	console.log("amount123123", checkbox);
		// 	if (checkbox === "dashboard") {
		// 		dashboard_id = "show_dashboard";
		// 	} else {
		// 		dashboard_id = "hide_dashboard";
		// 	}
		// 	privilages.push(checkbox.value);
		// });
	}

	// 	if (amount.includes("delivery_details")) {
	// 		delivery_details = "show_delivery_details";
	// 	} else {
	// 		delivery_details = "hide_delivery_details";
	// 	}

	// 	if (amount.includes("driver_details")) {
	// 		driver_details = "show_driver_details";
	// 	} else {
	// 		driver_details = "hide_driver_details";
	// 	}

	// 	if (amount.includes("enduser")) {
	// 		enduser = "show_enduser";
	// 	} else {
	// 		enduser = "hide_enduser";
	// 	}

	// 	if (amount.includes("rides")) {
	// 		rides = "show_rides";
	// 	} else {
	// 		rides = "hide_rides";
	// 	}

	// 	if (amount.includes("promocode")) {
	// 		promocode = "show_promocode";
	// 	} else {
	// 		promocode = "hide_promocode";
	// 	}

	// 	if (amount.includes("usermanagement")) {
	// 		usermanagement = "show_usermanagement";
	// 	} else {
	// 		usermanagement = "hide_usermanagement";
	// 	}

	// 	if (amount.includes("setting")) {
	// 		setting = "show_setting";
	// 	} else {
	// 		setting = "hide_setting";
	// 	}

	//amount.forEach(function (checkbox) {

	// console.log("amount", checkbox);
	// if (checkbox === "dashboard") {
	// 	dashboard_id = "show_dashboard";
	// } else {
	// 	dashboard_id = "hide_dashboard";
	// }
	//privilages.push(checkbox.value);
	//});
	//}

	// {
	// 	amount.length > 0 && (
	// 		<div>
	// 			{amount.map((value, index) => {
	// 				const className =
	// 					value === "dashboard" ? "show_dashboard" : "hide_dashboard";
	// 				// return (
	// 				// 	<div key={index} className={className}>
	// 				// 		{value}
	// 				// 	</div>
	// 				// );
	// 			})}
	// 		</div>
	// 	);
	// }

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
					{/* <a className="simple-text" href="http://www.creative-tim.com">
           Speedster
          </a> */}
				</div>
				{/* <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key} id={prop.id}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>

                
              );
            return null;
          })}

       
        </Nav> */}

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
						>
							<i className="nc-icon nc-single-copy-04" />
							<p>Claim</p>
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
