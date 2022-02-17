import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SearchResults from '../components/SearchResults';
import { QUERY_BRUNCH_SPOT_LIST } from '../utils/queries';

const Results = () => {
    const { loading, data } = useQuery(QUERY_BRUNCH_SPOT_LIST);
    const brunchSpotList = data?.brunchSpotList || [];
  
    return (
      <main>
        <div className="">
          <div className="">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <SearchResults
                results={brunchSpotList}
              />
            )}
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;