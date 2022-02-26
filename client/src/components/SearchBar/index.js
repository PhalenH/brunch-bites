import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_BRUNCH_SPOT_LIST, QUERY_ME } from "../../utils/queries";
import { ADD_TO_VISIT } from "../../utils/mutations";

function SearchBar({ placeholder }) {
  const [gotResults, setGotResults] = useState("");
  const [wordEntered, setWordEntered] = useState("");

  // Set up mutation with an option to handle errors
  const [addToVisit, { error }] = useMutation(ADD_TO_VISIT);

  const { loading: loading2, data: data2 } = useQuery(QUERY_ME);
  const profile = data2?.me || {};
  const { loading, data } = useQuery(QUERY_BRUNCH_SPOT_LIST, {
    variables: { city: gotResults },
  });

  const filteredBrunchData = data?.brunchSpotList || [];
  // console.log(filteredBrunchData);
  const handleFilter = (event) => {
    event.preventDefault();
    console.log(wordEntered);
    setGotResults(wordEntered);
  };

  // On click event, perform mutation and pass in card data object as arguments
  const handleAddCard = async (event, result) => {
    event.preventDefault();
    try {
      console.log(result);
      console.log(result.image_url);

      const { data } = await addToVisit({
        variables: {
          profileId: profile._id,
          name: result.name,
          address1: result.location.address1,
          city: result.location.city,
          zip_code: result.location.zip_code,
          state: result.location.state,
          price: result.price,
          url: result.url,
          rating: result.rating,
          image_url: result.image_url,
        },
      });
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  const clearInput = () => {
    console.log("something");
    setWordEntered("");
  };
  const changeWordEntered = (event) => {
    setWordEntered(event.target.value);
  };

  if (!filteredBrunchData) {
    return <h3>No Results found</h3>;
  }

  return (
    <div className="search-page-body">
      <form className="search" onSubmit={handleFilter}>
        <div className="searchInputs">
          {" "}
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={changeWordEntered}
          />
          <div className="searchIcon">
            {filteredBrunchData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
      </form>
      {filteredBrunchData.length !== 0 && (
        <div className="resultContainer">
          {filteredBrunchData.slice(0, 21).map((result) => (
            <div className="brunchCard" key={result._id}>
              <img
                className="brunch-image"
                src={result.image_url}
                alt="to-visit-brunch"
              />
              <div className="brunch-spot">
                <div className="brunch-name">
                  <h2 className=""> {result.name}</h2>
                </div>
                <section className="brunch-info">
                  <div className="price-rating">
                    <h3 className="brunch-stat">Rating: {result.rating}</h3>
                    <h3 className="brunch-stat">Price: {result.price}</h3>
                  </div>
                  <h3 className="brunch-location" id="h3-2">
                    {result.location.address1}, {result.location.city},{" "}
                    {result.location.state}, {result.location.zip_code}
                  </h3>
                </section>
                <div className="button-div">
                  <button className="url-button">
                    <a href={`${result.url}`} rel="noreferrer" target="_blank">
                      View Yelp Page
                    </a>
                  </button>
                  <button
                    type="button"
                    className="url-button"
                    onClick={(event) => {
                      handleAddCard(event, result);
                    }}
                  >
                    {" "}
                    <i className="bi-xl bi-plus-square"></i> Add{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
// <div key={result._id} className="brunchCard">
// <form
// onSubmit={(event) => {
//   handleAddCard(event, result);
// }}
// >
// <div className="">
//   <div className="">
//     <img src={result.image_url} alt="stock-img"></img>
//     <h3>{result.name}</h3> <br />
//     <section>
//       <p>{result.location.address1}</p>
//       <p>{result.location.city}</p>
//       <p>{result.location.zip_code}</p>
//       <p>{result.location.state}</p>
//       <p>{result.price}</p>
//       <p>{result.rating}</p>
//     </section>
//   </div>
//   <a
//     className=""
//     href={`${result.url}`}
//     rel="noreferrer"
//     target="_blank"
//   >
//     View the yelp url.
//   </a>
// </div>
// <div className="">
//   <button className="" type="submit">
//     Add To you watch list
//   </button>
// </div>
// </form>
// </div>
