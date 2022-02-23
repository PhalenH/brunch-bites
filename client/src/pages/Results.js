import React from "react";
// import { Redirect, useParams, Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
// import SearchResults from "../components/SearchResults";
// import { QUERY_BRUNCH_SPOT_LIST } from "../utils/queries";

const Results = () => {

  return (
    <main>
      <div className="">
        <Header />
        <div className="">
            <div>
            <SearchBar placeholder="Enter info" />
            </div>
        </div>
      </div>
    </main>
  );
};

export default Results;
