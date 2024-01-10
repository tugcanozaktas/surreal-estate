/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";

function NavBar({ onLogin, userId, onLogout }) {
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
      {userId ? (
        <button className="signout" type="button" onClick={onLogout}>
          Sign Out
        </button>
      ) : (
        <FacebookLogin
          appId="7463688096996643"
          autoLoad={false}
          fields="name,email,picture"
          callback={onLogin}
        />
      )}
    </div>
  );
}

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
