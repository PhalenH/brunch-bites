import React from "react";
import { useQuery } from "@apollo/client";

import {  } from "../utils/queries";
import LandingPage from "../components/LandingPage"


const Home = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <main>
      <div className="">
        <div className="">
          <LandingPage/>
        </div>
      </div>
    </main>
  );
};

export default Home;
