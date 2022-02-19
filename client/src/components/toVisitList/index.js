import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";

const ToVisitList = ({ toVisitResults}) => {
  if (!toVisitResults.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="">{}</h3>
      <div className="">
        {toVisitResults && toVisitResults.map((toVisit) => (
          <div key={toVisit._id} className="">
          <div className="">
            <h4 className="">
              {toVisit.name} <br />
              <ul>
                <li>{toVisit.location}</li>
                <li>{toVisit.price}</li>
                <li>{toVisit.rating}</li>
                <li>{toVisit.comment}</li>
              </ul>
            </h4>

            <Link
              className=""
              to={`${toVisit.url}`}
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

export default ToVisitList;
