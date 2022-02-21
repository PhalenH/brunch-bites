import React from "react";
import { Link } from "react-router-dom";

const VistedList = ({ visitedResults}) => {
  if (!visitedResults) {
    return <h3>You aint been nowhere</h3>;
  }

  return (
    <div>
      <h3 className="">{}</h3>
      <div className="">
        {visitedResults && visitedResults.map((visited) => (
          <div key={visited._id} className="">
          <div className="">
            <h4 className="">
              {visited.name} <br />
              <ul>
                <li>{visited.location}</li>
                <li>{visited.price}</li>
                <li>{visited.myRating}</li>
                <li>{visited.comment}</li>
                <li>{visited.dateVisited}</li>
              </ul>
            </h4>

            <Link
              className=""
              to={`${visited.url}`}
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

export default VistedList;
