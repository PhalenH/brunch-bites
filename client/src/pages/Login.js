import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import LoginIcon from '@mui/icons-material/Login';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Auth from "../utils/auth";

function Login (props) {
  const [formState, setFormState] = useState({
    name: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: "",
      password: "",
    });
  };

  return (
    <main className="login-background">
        <div className="login-page">
          <h4 className="">Login <LoginIcon/> </h4>
          <div className="">
            {data ? (
               <Redirect to="/profile/me" />
            ) : (
              <form onSubmit={handleFormSubmit}>
                <AccountCircleIcon/>
                <input
                  className="login-user-input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <PasswordIcon/>
                <input
                  className="login-user-input"
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
          <div className="sign-up-here">If you don't have an account sign up <Link className="here" to="/signup">
                HERE
              </Link></div>
        </div>
    </main>
  );
};

export default Login;
