import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="">
      <div className="">
        {location.pathname !== "/" && (
          <button
            className=""
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Brunch Buddy</h4>
      </div>
    </footer>
  );
};

export default Footer;
