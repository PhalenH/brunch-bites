import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="">
      <div className="back-btn">
        {location.pathname !== "/" && (
          <button
            className=""
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        </div>
        <h5>&copy; {new Date().getFullYear()} - Brunch Bites</h5>
        <h5>Created by Brunch Bros inc &#8482;</h5>
      
    </footer>
  );
};

export default Footer;
