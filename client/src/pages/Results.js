import React from "react";
import Footer from "../components/Footer";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Results = () => {

  return (
    <>
    <main>
      <div className="">
        <Header />
        <div>
            <div>
            <SearchBar placeholder="Search by city or town" />
            </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Results;
