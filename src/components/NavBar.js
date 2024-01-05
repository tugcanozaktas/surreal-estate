import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

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
          <Link className="item" to="/properties">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
