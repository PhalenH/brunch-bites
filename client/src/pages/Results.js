import React from "react";
// import { Redirect, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults";
import { QUERY_BRUNCH_SPOT_LIST } from "../utils/queries";

const Results = () => {
  const { loading, data } = useQuery(QUERY_BRUNCH_SPOT_LIST);
  const brunchSpotList = data?.brunchSpotList || [];
  console.log(brunchSpotList);
  return (
    <main>
      <div className="">
        <Header />
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
            {/* <SearchBar placeholder="Enter info" /> */}
            <SearchResults results={brunchSpotList} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Results;
