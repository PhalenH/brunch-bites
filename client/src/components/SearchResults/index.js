import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";

const ResultsList = ({ results }) => {
  if (!results.length) {
    return <h3>No Results found</h3>;
  }

  // add button to use addToVisit mutation 

  return (
    <div>
      <div className="">
        {results &&
          results.map((result) => (
            <div key={result._id} className="">
              <div className="">
                <h4 className="">
                  {result.name} <br />
                  <ul>
                    <li>{result.location}</li>
                    <li>{result.price}</li>
                    <li>{result.rating}</li>
                  </ul>
                </h4>

                <Link
                  className=""
                  to={`${result.url}`}
                >
                  View the yelp url.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ResultsList;
