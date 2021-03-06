import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./Navbar.css";

// NavLink adds "active" to className when path matches.

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const links = [<BrandLink key="/" to="/" />];

    if (! isLoggedIn) { 
      links.push(
        <NavLink key="signup" className="nav-item" to="/signup">
          Sign-Up/Login
        </NavLink>
      );
    }
    links.push(
      <NavLink key="search" className="nav-item" to="/search">
        Search
      </NavLink>
    );
    if (isLoggedIn) {
      links.push(
        <NavLink key="results" className="nav-item" to="/results">
          Results
        </NavLink>
      );
    }
    links.push(
      <NavLink key="about" className="nav-item" to="/about">
        About Us
      </NavLink>
    );
    if (isLoggedIn) {
      links.push(
        <span key="lougout" className="nav-item" onClick={logout}>
          Logout
        </span>
      );
      } 
  return <nav className="Navbar">{links}</nav>;
}

function BrandLink(props) {
  return (
    <NavLink className="nav-item brand" exact {...props}>
      Home
    </NavLink>
  );
}


export default Navbar;
