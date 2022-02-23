import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_BRUNCH_SPOT_LIST } from "../../utils/queries";
import { ADD_TO_VISIT } from "../../utils/mutations";

function SearchBar({ placeholder }) {
  const [gotResults, setGotResults] = useState("");
  const [wordEntered, setWordEntered] = useState("");
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

  const { loading, data } = useQuery(QUERY_BRUNCH_SPOT_LIST, {
    variables: { city: gotResults },
  });

  const filteredBrunchData = data?.brunchSpotList || [];
  console.log(filteredBrunchData);
  const handleFilter = (event) => {
    event.preventDefault();
    console.log(wordEntered);
    setGotResults(wordEntered);
  };

  // On click event, perform mutation and pass in card data object as arguments
  const handleAddCard = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addToVisit({
        variables: { ...cardState },
      });
      console.log(JSON.stringify(data));
      // window.location.reload();
    } catch (err) {
      console.error(err);
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
    <div>
      <form className="search" onSubmit={handleFilter}>
        <div className="searchInputs">
          {" "}
          {gotResults}
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
        <div className="">
          {/* might need key after result */}
          {filteredBrunchData.slice(0, 20).map((result) => {
            return (
              <form onClick={handleAddCard}>
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
                    <a
                      className=""
                      href={`${result.url}`}
                      rel="noreferrer"
                      target="_blank"
                    >
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
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
