import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
