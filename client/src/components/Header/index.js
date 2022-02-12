import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="">
      <div className="">
        <Link className="" to="/">
          <h1 className="" style={{ fontSize: "3rem" }}>
            Brunch Buddy
          </h1>
        </Link>
        <p className="" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          Get your brunch on
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="" to="/me">
                View My Profile
              </Link>
              <button className="" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
