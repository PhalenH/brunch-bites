import React from "react";

// import { Redirect, useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";


function Results() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="navbar-brand" href="#">Profile</a>
                <a className="navbar-brand" href="#">Discover</a>
                <a className="navbar-brand" href="#">Logout</a>
            </div>
            <div className="input-group">
                    <div className="form-outline">
                    <input type="search" id="form1" className="form-control" />
                    <button type="button" className="btn btn-primary">
                    <i className="fas fa-search">Search</i>
                    </button>
                    </div>
                </div>
          </div>
        </div>
      </nav>
    )
};


export default Results;