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

function Sidebar({ color, image, routes }) {
  const history = useHistory();
  const location = useLocation();
  const excludedRoutes = ['/addpromocode'];
      if (excludedRoutes.includes(location.pathname)) {
        return null;
      }
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

     $(document).on("click",".pricing",function() {
        history.push("/admin/pricing");
    });

    $(document).on("click",'.user_link',function(){
       history.push("/admin/usermanagement");  
    });

    
    $(document).on("click",'.user_roles',function(){
       history.push("/admin/role");  
    });
    
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="/admin/dashboard"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={require("assets/img/speedster.png")} alt="..." class="side_barlogo" />
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
                  >
                    <i className="nc-icon nc-chart-pie-35" />
                    <p>Dashboard</p>
                  </NavLink>
           </li>

            <li>
             <NavLink
                    to="/admin/deliverrequest"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-circle-09" />
                    <p>Delivery Request</p>
                  </NavLink>
           </li>

           <li>
             <NavLink
                    to="/admin/table"
                    className="nav-link"
                    activeClassName="active"
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
                  >
                    <i className="nc-icon nc-circle-09" />
                    <p>Enduser</p>
                  </NavLink>
           </li>

            <li>
             <NavLink
                    to="/admin/icons"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-delivery-fast" />
                    <p>Rides</p>
                  </NavLink>
           </li>

           <li>
             <NavLink
                    to="/admin/promocode"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-delivery-fast" />
                    <p>Promocode</p>
                  </NavLink>
           </li>
            
            <li>
             <NavLink
                    to="#"
                    className="nav-link user_management"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-delivery-fast" />
                    <p>User Management</p>
              </NavLink>  

                <ul class="user_managementsetting close1">
                  <li class="user_link">Users</li>
                  <li class="user_roles">Roles</li>
                </ul>   
           </li>

            <li>
             <NavLink
                    to="#"
                    className="nav-link settingdata"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-delivery-fast" />
                    <p>Setting</p>
                  </NavLink>
                <ul class="submenu_setting close">
                  <li class="pricing">Pricing</li>
                </ul>    
           </li>

           <li>
             <NavLink
                    to="/admin/login"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="nc-icon nc-pin-3" />
                    <p>Logout</p>
                  </NavLink>
           </li>
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
