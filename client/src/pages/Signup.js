import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="signup-background">
      <div className="signup-page">
        <h4 className="">Sign Up</h4>
        <div className="">
          {data ? (
            <Redirect to="/profile/me" />
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className=""
                placeholder="Your username"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className=""
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="submit"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && <div className="error-message">{error.message}</div>}
        </div>
        <div className="sign-up-here">
          If you already have an account login{" "}
          <Link className="" to="/login">
            HERE
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
