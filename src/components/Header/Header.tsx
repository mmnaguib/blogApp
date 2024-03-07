import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <div className="header">
      <div className="authButtons">
        <a className="authBtn btn-sm" href="/register">
          <i className="bi bi-person-plus"></i>
          Register
        </a>
        <a className="authBtn btn-sm" href="/login">
          <i className="bi bi-box-arrow-in-right"></i>
          Login
        </a>
      </div>
      <div
        style={{
          clipPath: open ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
        }}
        className="links"
      >
        <a href="#home" onClick={() => setOpen(false)}>
          <i className="bi bi-house"></i>Home
        </a>
        <a href="#posts" onClick={() => setOpen(false)}>
          <i className="bi bi-stickies"></i>Posts
        </a>
        <a href="#admin" onClick={() => setOpen(false)}>
          <i className="bi bi-person-check"></i>Admin Dashboard
        </a>
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
