import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <div className="header">
      <div className="authButtons">
        <NavLink className="authBtn btn-sm" to="/register">
          <i className="bi bi-person-plus"></i>
          Register
        </NavLink>
        <NavLink className="authBtn btn-sm" to="/login">
          <i className="bi bi-box-arrow-in-right"></i>
          Login
        </NavLink>
      </div>
      <div
        style={{
          clipPath: open ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
        }}
        className="links"
      >
        <NavLink to="/" onClick={() => setOpen(false)}>
          <i className="bi bi-house"></i>Home
        </NavLink>
        <NavLink to="/posts" onClick={() => setOpen(false)}>
          <i className="bi bi-stickies"></i>Posts
        </NavLink>
        <NavLink to="/post/create" onClick={() => setOpen(false)}>
          <i className="bi bi-journal-plus"></i>Create
        </NavLink>
        <NavLink to="/admin-dashboard" onClick={() => setOpen(false)}>
          <i className="bi bi-person-check"></i>Admin Dashboard
        </NavLink>
      </div>
      <div className="logo">
        <div className="toggleDiv" onClick={() => toggleNavbar()}>
          {open ? (
            <i className="bi bi-x" style={{ fontSize: "40px" }}></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
        <strong>Blog</strong>
        <i className="bi bi-pencil"></i>
      </div>
    </div>
  );
};

export default Header;
