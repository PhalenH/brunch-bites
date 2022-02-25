import React from "react";
// import { Link } from "react-router-dom";

const ToVisitList = ({ toVisitResults }) => {
  console.log(toVisitResults)
  if (!toVisitResults) {
    return <h3>Add a place to view list</h3>;
  }

  return (
<div>
{toVisitResults &&
          toVisitResults.map((toVisit) => (
            <div key={toVisit._id} className="">
            <div className="">
              <h4 className="">
                {toVisit.name} <br />
                <ul>
                  <li>{toVisit.address1}</li>
                  <li>{toVisit.city}</li>
                  <li>{toVisit.zip_code}</li>
                  <li>{toVisit.state}</li>
                  <li>{toVisit.price}</li>
                  <li>{toVisit.myRating}</li>
                  <li>{toVisit.comment}</li>
                  <li>{toVisit.datetoVisit}</li>
                </ul>
              </h4>
              <a className="" href={`${toVisit.url}`}>
                View the yelp url.
              </a>
            </div>
          </div>
))}
</div>
  );
};

export default ToVisitList;

