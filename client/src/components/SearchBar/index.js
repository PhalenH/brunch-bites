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
      console.log(profile._id);

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
          {filteredBrunchData.slice(0, 20).map((result) => (
            <div key={result._id} className="">
              <form
                onSubmit={(event) => {
                  handleAddCard(event, result);
                }}
              >
                <div className="">
                  <div className="">
                    <h3>{result.name}</h3> <br />
                    <section>
                      <h4>{result.location.address1}</h4>
                      <h4>{result.location.city}</h4>
                      <h4>{result.location.zip_code}</h4>
                      <h4>{result.location.state}</h4>
                      <h4>{result.price}</h4>
                      <h4>{result.rating}</h4>
                    </section>
                  </div>
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
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

// const [cardState, setCardState] = useState({
  //   name: "",
  //   address1: "",
  //   city: "",
  //   zip_code: "",
  //   state: "",
  //   price: "",
  //   url: "",
  //   rating: "",
  //   comment: "",
  // });