import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useQuery } from "@apollo/client";
import { QUERY_BRUNCH_SPOT_LIST } from "../../utils/queries";
// need to add the material-ui packages, should be good if not refer back to https://mui.com/components/icons/#main-content

function SearchBar({ placeholder, searchData }) {
  // const [filteredData, setFilteredData] = useState([]);
  const [gotResults, setGotResults] = useState("");
  const [wordEntered, setWordEntered] = useState("");
  const { loading, data, refetch } = useQuery(QUERY_BRUNCH_SPOT_LIST, {
    variables: { city: gotResults },
  });
  const filteredData = data?.brunchSpotList || [];
  console.log(filteredData);
  const handleFilter = (event) => {
    event.preventDefault()

    console.log(wordEntered);
    setGotResults(wordEntered);

    // setWordEntered(searchWord);
    // const newFilter = data.filter((value) => {
    //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
    // });

    // if (searchWord === "") {
    //   setFilteredData([]);
    // }
    // } else {
    //   refetch();
    // }
  };

  const clearInput = () => {
    console.log("something");
    // setFilteredData([]);
    setWordEntered("");
  };
  const changeWordEntered = (event) => {
    setWordEntered(event.target.value)
  }

  return (
    
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
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 20).map((value, key) => {
            return (
              <a
                key={key}
                className="dataItem"
                href={value.link}
                target="blank"
              >
                <p>{value.name}, {value.rating} </p>
              </a>
            );
          })}
        </div>
      )}
    </form>
  );
}

export default SearchBar;
