import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/bbLogo.png";
import './LandingPage.css'
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <main className="homepage-background">
      <header className="home-header">
        <img className="logo" src={logo} alt="Logo" />

        <div className="login-signup">
          <div className="fade-in-text">
            <button className="login">
              <Link className="login-link" to="/login">
                Login
              </Link>
            </button>
            <button className="signup">
              <Link className="login-link" to="/signup">
                Signup
              </Link>
            </button>
          </div>
        </div>
      </header>
      <Footer />
    </main>
  );
};

export default LandingPage;
