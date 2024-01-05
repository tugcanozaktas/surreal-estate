/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="house-logo"
        src="https://cdn-icons-png.flaticon.com/512/10751/10751558.png"
        alt="house-logo"
      />
      <h2 className="title">Surreal Estate</h2>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="#">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="#">Add a Property</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
