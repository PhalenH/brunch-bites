import React from "react";
import { Link } from "react-router-dom";

const ToVisitList = ({ toVisitResults }) => {
  if (!toVisitResults) {
    return <h3>Add a place to view list</h3>;
  }

  return (
    <div>
      <h3 className="">{}</h3>
      <div className="">
        {toVisitResults &&
          toVisitResults.map((toVisit) => (
            <div key={toVisit._id} className="">
              <div className="">
                <h4 className="">
                  {toVisit.name} <br />
                  <ul>
                    <li>{toVisit.location.address1}</li>
                    <li>{toVisit.location.city}</li>
                    <li>{toVisit.location.zip_code}</li>
                    <li>{toVisit.location.state}</li>
                    <li>{toVisit.price}</li>
                    <li>{toVisit.rating}</li>
                    <li>{toVisit.comment}</li>
                  </ul>
                </h4>
                <a className="" href={`${toVisit.url}`}>
                  View the yelp url.
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToVisitList;
