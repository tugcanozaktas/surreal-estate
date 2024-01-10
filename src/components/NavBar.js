import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import PropTypes from "prop-types";

function NavBar({ onLogin, userName, userId, onLogout }) {
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
          <Link className="item" to="/saved-properties">
            Saved Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
      {userId ? (
        <div className="user-section">
          <button className="signout" type="button" onClick={onLogout}>
            Sign Out
          </button>
          <div className="info-user">
            <h2 className="name">{userName}</h2>
            <img
              alt="profile-pic"
              className="photo"
              src={`https://graph.facebook.com/${userId}/picture?type=normal`}
            />
          </div>
        </div>
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
  userName: PropTypes.string.isRequired,
};

export default NavBar;
