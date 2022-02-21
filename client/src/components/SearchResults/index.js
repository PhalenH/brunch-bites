import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import { useQuery } from "@apollo/client";

import ADD_TO_VISIT from "../../utils/mutations";

const ResultsList = ({ results }) => {
  console.log(results);

  const [cardState, setCardState] = useState({
    name: "",
    location: "",
    price: "",
    url: "",
    rating: "",
    comment: "",
  });
  // Set up mutation with an option to handle errors
  const [addToVisit, { error }] = useMutation(ADD_TO_VISIT);

  // On click event, perform mutation and pass in card data object as arguments
  const handleAddCard = async (event) => {
    event.preventDefault();
    try {
      const { data } = addToVisit({
        variables: { ...cardState },
      });
      console.log(JSON.stringify(data));
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (!results) {
    return <h3>No Results found</h3>;
  }

  // TODO: Figure out how to take result information and pass it into cardState
  // need something like: value={cardState.name} as well for location/price/url/rating/comment
  return (
    <div>
      <div className="">
        {results &&
          results.map((result) => (
            <form onSubmit={handleAddCard}>
            <div key={result._id} className="">
              <div className="">
                <h4 className="">
                  {result.name} <br />
                  <ul>
                    <li>{result.location.address1}</li>
                    <li>{result.location.city}</li>
                    <li>{result.location.zip_code}</li>
                    <li>{result.location.state}</li>
                    <li>{result.price}</li>
                    <li>{result.rating}</li>
                  </ul>
                </h4>
                <a className="" href={`${result.url}`}>
                  View the yelp url.
                </a>
              </div>
              <div className="">
                <button className="" type="submit">
                  Add To you watch list
                </button>
              </div>
            </div>
            </form>
          ))}
      </div>
    </div>
  );
};

export default ResultsList;
