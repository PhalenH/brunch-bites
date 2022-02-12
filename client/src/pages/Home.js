import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <h1>TO BE FILLED WITH HOMESCREEN</h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
