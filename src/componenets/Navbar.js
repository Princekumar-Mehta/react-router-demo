import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";
export function Navbar() {
  const auth = useAuth();
  function navLinkStyles({ isActive }) {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textdecoration: isActive ? "none" : "underline",
    };
  }
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}
