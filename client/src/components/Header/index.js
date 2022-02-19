import React from "react";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import logo from '/Users/samkennedy/Desktop/brunch-bites/client/src/free-image-resizer-cropper.png';
import Auth from "../../utils/auth";
import Footer from '../Footer'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
     <main className='homepage-background'>
        <header className="home-header">
        <Link className="" to="/">
          <img className='logo' src={logo} alt="Logo" />
        </Link>
        
        <div className="login-signup">
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
            <div className='fade-in-text'>
            <button className="login">
              <Link className="" to="/login">
                Login
              </Link>
              </button>
              <button className="signup">
              <Link className="" to="/signup">
                Signup
              </Link>
              </button>
              
            </div>
            
          )}
        </div>
        <Footer />
        </header>
      </main>
  );
};

export default Header;
