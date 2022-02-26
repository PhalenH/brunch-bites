import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";
import headerlogo from "../../assets/bbheaderlogo.png";
// import ViewProfile from "../ViewProfile";

const Header = ({ location }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header-body">
        <div className="logo-container">
          <img className="headerlogo" src={headerlogo} alt="Logo" />
          </div>
        <div className="header-button-container">
              <button  className="header-btn" id="search-pg-btn">
                {" "}
                <Link className="login-link" to="/results">
                  Search Page
                </Link>{" "}
              </button>

              <button className="header-btn">
                {" "}
                <Link className="login-link" to="/profile/me">
                  View My Profile
                </Link>{" "}
              </button>
          <button className="header-btn" onClick={logout}>
            Logout
          </button>
        </div>
    </header>
  );
};

export default Header;
