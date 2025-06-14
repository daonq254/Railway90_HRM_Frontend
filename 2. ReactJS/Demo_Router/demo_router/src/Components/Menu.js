import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <>
      <div className="row">
        <nav
          className="navbar navbar-inverse"
          style={{ backgroundColor: "black", color: "black" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to={"/home"}>
                VTI ACADEMY
              </NavLink>
            </div>
            <ul class="nav navbar-nav">
              <li>
                <NavLink to={"/home"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/AccountManagement"}>AccountManagement</NavLink>
              </li>
              <li>
                <NavLink to={"/DepartmentManagement"}>
                  DepartmentManagement
                </NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to={"/Sign_Up"}>
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Login"}>
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Menu;
