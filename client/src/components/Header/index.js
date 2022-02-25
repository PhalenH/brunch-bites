import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Auth from "../../utils/auth";
import headerlogo from "../../assets/bbheaderlogo.png"
// import ViewProfile from "../ViewProfile";

const Header = ({ location }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header-body">
      <div className="container">
        <h1 className=""><img className="headerlogo" src={headerlogo} alt="Logo"/></h1>
        <div className="container2">
        <div>
          {Auth.loggedIn() ? (
            <>
            <div className="ProfileResultsBnt">
            <button> <Link className="ViewResults" to="/results">
                Search Page
              </Link> </button>
  
              <button> <Link className="ViewProfile" to="/me">
                View My Profile
              </Link> </button>
              </div>
              {/* <button className="" onClick={logout}>
                Logout
              </button> */}
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
        {/* <ViewProfile /> */}
        <p className="">Get your brunch on!</p>
        <button className="logoutbtn" onClick={logout}>
                Logout
              </button>
              
       {/* <ViewProfile /> */}
       
        </div>
      </div>
    </header>
  );
};

export default Header;
