import React from "react";
import { useQuery } from "@apollo/client";

import {  } from "../utils/queries";
import Header from "../components/Header";


const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
    <Header />
    
    {/* <LoginSignup /> */}
    </>
  );
};

export default Home;
