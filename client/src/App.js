import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import Footer from "./components/Footer";
import Results from "./pages/Results";
import Error from "./pages/Error";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <div className="">

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/results">
              <Results />
            </Route>

            <Route exact path="/profile/me">
              <Profile />
            </Route>

            {/* <Route exact path="*">
              <Error />
            </Route> */}
           
          </div>
    
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
