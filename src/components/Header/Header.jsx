import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };
  const toggleDropDown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="header">
      {user ? (
        <div className="header-username">
          <span onClick={() => toggleDropDown()}>{user.username}</span>
          <img src={user.profile_photo.url} alt="" className="avatarHeader" />
          {dropdown ? (
            <div className="user-dropdown">
              <Link
                to={`/profile/${user._id}`}
                className="dropdownItem"
                onClick={() => setDropdown(false)}
              >
                <i className="bi bi-file-person"></i>
                <span>Profile</span>
              </Link>
              <div className="dropdownItem">
                <i className="bi bi-box-arrow-in-left"></i>
                <span>Logout</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
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
      )}
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
