import React from "react";
import { Link } from "react-router-dom";

const ToVisitList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="">{title}</h3>
      <div className="">
        {profiles && profiles.map((profile) => <h1>to fill with data</h1>)}
      </div>
    </div>
  );
};

export default ToVisitList;
